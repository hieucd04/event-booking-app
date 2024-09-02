import { View } from "@miniskylab/antimatter-view";
import { Text } from "@miniskylab/antimatter-text";
import { Image } from "@miniskylab/antimatter-image";
import { InputField } from "@miniskylab/antimatter-input-field";
import { DropdownMenu, DropdownMenuProps, MenuItemStatus } from "@miniskylab/antimatter-dropdown-menu";
import { DataList, type DataListControlPanel } from "@miniskylab/antimatter-data-list";
import { DateFormat, GregorianCalendar } from "@miniskylab/antimatter-framework";
import { DefaultIconSet } from "@miniskylab/antimatter-typography";
import { useDispatch, useSelector } from "react-redux";
import React, { useMemo, useState } from "react";
import { Alert, Platform, SafeAreaView } from "react-native";
import {
    createEventsSelector,
    createBookingsSelector,
    createSelectedEventIdSelector,
    createSelectedBookingIdSelector,
    createActiveScreenNameSelector
} from "../redux-selectors";
import { ReduxAction } from "../redux-slices";
import { TicketType } from "../redux-state";
import { EventImages } from "./event-images";
import { EventRow } from "./components";
import * as Styles from "./styles";

export function Application()
{
    const dispatch = useDispatch();

    const eventsSelector = useMemo(createEventsSelector, []);
    const bookingsSelector = useMemo(createBookingsSelector, []);
    const selectedEventIdSelector = useMemo(createSelectedEventIdSelector, []);
    const selectedBookingIdSelector = useMemo(createSelectedBookingIdSelector, []);
    const activeScreenNameSelector = useMemo(createActiveScreenNameSelector, []);

    const events = useSelector(eventsSelector);
    const bookings = useSelector(bookingsSelector);
    const selectedEventId = useSelector(selectedEventIdSelector);
    const selectedBookingId = useSelector(selectedBookingIdSelector);
    const activeScreenName = useSelector(activeScreenNameSelector);

    const [sortBy, setSortBy] = useState("sortByDate");
    const [isSortByDropdownMenuOpen, setIsSortByDropdownMenuOpen] = useState(false);
    const [isTicketTypeDropdownMenuOpen, setIsTicketTypeDropdownMenuOpen] = useState(false);

    const selectedEvent = selectedEventId ? events[selectedEventId] : undefined;
    const selectedBooking = selectedBookingId !== undefined && selectedBookingId !== null ? bookings[selectedBookingId] : undefined;
    const {button1, button2, button3} = getControlPanel();

    return (
        <View style={Styles.App__Root}>
            <SafeAreaView/>
            <View style={Styles.App__MainContent}>
                <Text style={Styles.App__Title}>Event Booking App</Text>
                <Text style={Styles.App__Subtitle}>Test Submission by Harry Cu</Text>
                {renderSortByDropdownMenu()}
                <DataList button1={button1} button2={button2} button3={button3}>
                    {renderContent()}
                </DataList>
            </View>
        </View>
    );

    function byDate(dateA: string, dateB: string): number
    {
        return new Date(dateA).getTime() - new Date(dateB).getTime();
    }

    function byLocation(locationA: string, locationB: string): number
    {
        return locationA === locationB
            ? 0
            : locationA > locationB
                ? 1
                : -1;
    }

    function getControlPanel(): DataListControlPanel
    {
        switch (activeScreenName)
        {
            case "booking":
                return selectedBookingId === ""
                    ? {
                        button1: { icon: DefaultIconSet.ArrowLeft, text: "Back", onPress: onCancelDraftBooking },
                        button2: { icon: DefaultIconSet.Eye, text: "Booking Form", disabled: true },
                        button3: { icon: DefaultIconSet.CheckMarkInsideCircle, text: "Confirm", disabled: !isConfirmButtonEnabled(), onPress: onConfirmButtonPress }
                    } : {
                        button1: { icon: DefaultIconSet.ArrowLeft, text: "Back", onPress: onGoingBackFromViewBookingScreen },
                        button2: { icon: DefaultIconSet.Eye, text: "All Bookings", disabled: true },
                        button3: { icon: DefaultIconSet.XMarkInsideCircle, text: "Cancel", disabled: !selectedBookingId, onPress: onCancelConfirmedBooking }
                    };

            default:
            case "event":
                return !selectedEventId
                    ? {
                        button1: { icon: DefaultIconSet.ArrowLeft, text: "Back", disabled: true },
                        button2: { icon: DefaultIconSet.Eye, text: "All Events", disabled: true },
                        button3: { icon: DefaultIconSet.Fairshare, text: "View Bookings", onPress: onViewBookingButtonPress }
                    } : {
                        button1: { icon: DefaultIconSet.ArrowLeft, text: "Back", onPress: () => { dispatch(ReduxAction.SelectedEventId.SetSelectedEventId(null)); } },
                        button2: { icon: DefaultIconSet.Eye, text: "Event Details", disabled: true },
                        button3: { icon: DefaultIconSet.Registry, text: "Book Now", onPress: onBookButtonPress }
                    };
        }
    }

    function isConfirmButtonEnabled()
    {
        return selectedBooking?.attendeeName && selectedBooking?.attendeeEmail;
    }

    function renderSortByDropdownMenu()
    {
        const isDisabled = !!selectedEventId || selectedBookingId === "";
        if (isDisabled) return null;

        return (
            <View style={Styles.App__SortByDropdownMenuContainer}>
                <Text style={Styles.App__SortByDropdownMenuLabel}>Sort By:</Text>
                <DropdownMenu
                    style={Styles.App__SortByDropdownMenu}
                    menuItems={{
                        sortByDate: { displayText: "Sort by date", status: sortBy === "sortByDate" ? MenuItemStatus.Selected : undefined },
                        sortByLocation: { displayText: "Sort by location", status: sortBy === "sortByLocation" ? MenuItemStatus.Selected : undefined }
                    }}
                    isOpen={isSortByDropdownMenuOpen}
                    onSelectedItemContainerPress={() => { setIsSortByDropdownMenuOpen(!isSortByDropdownMenuOpen); }}
                    onMenuItemPress={menuItemKey =>
                    {
                        setSortBy(menuItemKey);
                        setIsSortByDropdownMenuOpen(false);
                    }}
                />
            </View>
        );
    }

    function renderContent()
    {
        switch (activeScreenName)
        {
            case "event":
                return !selectedEventId ? renderEvents() : renderEventDetails();

            case "booking":
                return selectedBookingId === "" ? renderBookingForm() : renderBookings();
        }
    }

    function renderEvents()
    {
        return Object.keys(events)
            .sort((eventIdA: string, eventIdB: string) =>
            {
                const eventA = events[eventIdA];
                const eventB = events[eventIdB];

                return sortBy === "sortByLocation"
                    ? byLocation(eventA.location, eventB.location)
                    : byDate(eventA.date, eventB.date);
            })
            .map((eventId) =>
            (
                <EventRow.Component
                    key={eventId}
                    style={Styles.App__EventRow}
                    title={events[eventId].title}
                    location={events[eventId].location}
                    date={new Date(events[eventId].date)}
                    image={EventImages[eventId]}
                    onPress={() =>
                    {
                        setIsSortByDropdownMenuOpen(false);
                        dispatch(ReduxAction.SelectedEventId.SetSelectedEventId(eventId));
                    }}
                />
            ));
    }

    function renderEventDetails()
    {
        if (!selectedEventId || !selectedEvent) return undefined;
        return (
            <View style={Styles.App__EventDetails__Root}>
                <Text style={Styles.App__EventDetails__Title}>{selectedEvent.title}</Text>
                <View style={Styles.App__EventDetails__LabelValueContainer}>
                    <Text style={Styles.App__EventDetails__Label}>Date:</Text>
                    <Text style={Styles.App__EventDetails__Value}>{GregorianCalendar.toString(new Date(selectedEvent.date), DateFormat.Full)}</Text>
                </View>
                <View style={Styles.App__EventDetails__LabelValueContainer}>
                    <Text style={Styles.App__EventDetails__Label}>Location:</Text>
                    <Text style={Styles.App__EventDetails__Value}>{selectedEvent.location}</Text>
                </View>
                <View style={Styles.App__EventDetails__LabelValueContainer}>
                    <Text style={Styles.App__EventDetails__Label}>Available Ticket Types:</Text>
                    <Text style={Styles.App__EventDetails__Value}>{selectedEvent.availableTicketTypes.join(", ")}</Text>
                </View>
                <View style={Styles.App__EventDetails__ImageContainer}>
                    <Image style={Styles.App__EventDetails__Image} source={EventImages[selectedEventId]}/>
                </View>
                <Text style={Styles.App__EventDetails__Description}>{selectedEvent.description}</Text>
            </View>
        );
    }

    function renderBookings()
    {
        return Object.keys(bookings)
            .sort((bookingIdA: string, bookingIdB: string) =>
            {
                const eventA = events[bookings[bookingIdA].eventId];
                const eventB = events[bookings[bookingIdB].eventId];

                return sortBy === "sortByLocation"
                    ? byLocation(eventA.location, eventB.location)
                    : byDate(eventA.date, eventB.date);
            })
            .map(bookingId =>
            (
                <EventRow.Component
                    key={bookingId}
                    style={Styles.App__EventRow}
                    title={events[bookings[bookingId].eventId].title}
                    location={events[bookings[bookingId].eventId].location}
                    date={new Date(events[bookings[bookingId].eventId].date)}
                    image={EventImages[bookings[bookingId].eventId]}
                    isBooked={true}
                    isSelected={selectedBookingId === bookingId}
                    onPress={selectedBookingId !== bookingId ? () => { dispatch(ReduxAction.SelectedBookingId.SetSelectedBookingId(bookingId)); } : undefined}
                />
            ));
    }

    function renderBookingForm()
    {
        const menuItems: DropdownMenuProps["menuItems"] = {};
        selectedEvent?.availableTicketTypes.forEach(ticketType => {
            menuItems[ticketType] = {
                displayText: ticketType,
                status: ticketType === selectedBooking?.ticketType ? MenuItemStatus.Selected : undefined
            };
        });

        return (
            <View style={Styles.App__BookingForm__Root}>
                <Text style={Styles.App__BookingForm__Title}>Enter Attendee Information Below</Text>
                <Text style={Styles.App__BookingForm__Subtitle} numberOfLines={0}>You won't be able to click the "Confirm" button if any of the fields below is empty</Text>
                <InputField
                    style={Styles.App__BookingForm__InputField}
                    placeholder={"Attendee Name"}
                    value={selectedBooking?.attendeeName}
                    onChangeText={newText => { dispatch(ReduxAction.Bookings.ChangeDraftBookingData({attendeeName: newText})); }}
                />
                <InputField
                    style={Styles.App__BookingForm__InputField}
                    placeholder={"Attendee Email"}
                    value={selectedBooking?.attendeeEmail}
                    onChangeText={newText => { dispatch(ReduxAction.Bookings.ChangeDraftBookingData({attendeeEmail: newText})); }}
                />
                <Text style={Styles.App__BookingForm__Label}>Ticket Type:</Text>
                <DropdownMenu
                    style={Styles.App__BookingForm__DropdownMenu}
                    placeholder={"Ticket Type"}
                    menuItems={menuItems}
                    isOpen={isTicketTypeDropdownMenuOpen}
                    onSelectedItemContainerPress={() => { setIsTicketTypeDropdownMenuOpen(!isTicketTypeDropdownMenuOpen); }}
                    onMenuItemPress={ticketType =>
                    {
                        dispatch(ReduxAction.Bookings.ChangeDraftBookingData({ ticketType: ticketType as TicketType }));
                        setIsTicketTypeDropdownMenuOpen(false);
                    }}
                />
            </View>
        );
    }

    function onBookButtonPress()
    {
        if (!selectedEventId) return;

        dispatch(ReduxAction.Bookings.AddDraftBooking({
            eventId: selectedEventId,
            attendeeName: "",
            attendeeEmail: "",
            ticketType: TicketType.GeneralAdmission
        }));
        dispatch(ReduxAction.SelectedBookingId.SetSelectedBookingId(""));
        dispatch(ReduxAction.ActiveScreenName.SetActiveScreenName("booking"));
    }

    function onConfirmButtonPress()
    {
        if (!selectedBooking) return;

        setIsSortByDropdownMenuOpen(false);
        setIsTicketTypeDropdownMenuOpen(false);
        dispatch(ReduxAction.Bookings.AddConfirmedBooking({...selectedBooking}));
        dispatch(ReduxAction.Bookings.CancelBooking(""));
        dispatch(ReduxAction.SelectedBookingId.SetSelectedBookingId(null));
        dispatch(ReduxAction.SelectedEventId.SetSelectedEventId(null));
        dispatch(ReduxAction.ActiveScreenName.SetActiveScreenName("booking"));
    }

    function onCancelDraftBooking()
    {
        setIsTicketTypeDropdownMenuOpen(false);
        dispatch(ReduxAction.SelectedBookingId.SetSelectedBookingId(null));
        dispatch(ReduxAction.ActiveScreenName.SetActiveScreenName("event"));
        dispatch(ReduxAction.Bookings.CancelBooking(""));
    }

    function onCancelConfirmedBooking()
    {
        if (!selectedBookingId || !selectedBooking) return;

        const dialogBoxTitle = "Caution";
        const dialogBoxMessage = `Are you sure you want to cancel the booking for event \n"${events[selectedBooking.eventId].title}"`;
        const dialogBoxAction = () => {
            dispatch(ReduxAction.SelectedBookingId.SetSelectedBookingId(null));
            dispatch(ReduxAction.Bookings.CancelBooking(selectedBookingId));
        };

        if (Platform.OS === "web")
        {
            if (window.confirm(dialogBoxMessage))
            {
                dialogBoxAction();
            }
        }
        else
        {
            Alert.alert(
                dialogBoxTitle,
                dialogBoxMessage,
                [
                    { text: "Cancel", style: "cancel" },
                    {
                        text: "OK",
                        onPress: dialogBoxAction
                    }
                ]
            );
        }
    }

    function onViewBookingButtonPress()
    {
        dispatch(ReduxAction.ActiveScreenName.SetActiveScreenName("booking"));
        dispatch(ReduxAction.SelectedBookingId.SetSelectedBookingId(null));
    }

    function onGoingBackFromViewBookingScreen()
    {
        dispatch(ReduxAction.ActiveScreenName.SetActiveScreenName("event"));
        dispatch(ReduxAction.SelectedBookingId.SetSelectedBookingId(null));
    }
}
