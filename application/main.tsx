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

    const [isTicketTypeDropdownMenuOpen, setIsTicketTypeDropdownMenuOpen] = useState(false);

    const selectedEvent = selectedEventId ? events[selectedEventId] : undefined;
    const selectedBooking = selectedBookingId !== undefined && selectedBookingId !== null ? bookings[selectedBookingId] : undefined;
    const {button1, button2, button3} = getControlPanel();

    return (
        <View style={Styles.App__Root}>
            <View style={Styles.App__MainContent}>
                <DataList button1={button1} button2={button2} button3={button3}>
                    {renderContent()}
                </DataList>
            </View>
        </View>
    );

    function getControlPanel(): DataListControlPanel
    {
        switch (activeScreenName)
        {
            case "booking":
                return selectedBookingId === ""
                    ? {
                        button1: { icon: DefaultIconSet.ArrowLeft, text: "Back", onPress: onCancelDraftBooking},
                        button2: { icon: DefaultIconSet.Eye, text: "Booking Form", disabled: true },
                        button3: { icon: DefaultIconSet.CheckMarkInsideCircle, text: "Confirm", onPress: onConfirmButtonPress}
                    } : {
                        button1: { icon: DefaultIconSet.ArrowLeft, text: "Back", onPress: () => { console.log("Lorem Ipsum"); }},
                        button2: { icon: DefaultIconSet.Eye, text: "All Bookings", disabled: true },
                        button3: { icon: DefaultIconSet.XMarkInsideCircle, text: "Cancel", disabled: !selectedBookingId, onPress: () => { console.log("Lorem Ipsum"); }}
                    };

            default:
            case "event":
                return !selectedEventId
                    ? {
                        button1: { icon: DefaultIconSet.ArrowLeft, text: "Back", disabled: true },
                        button2: { icon: DefaultIconSet.Eye, text: "All Events", disabled: true },
                        button3: { icon: DefaultIconSet.Registry, text: "Book Now", disabled: true }
                    } : {
                        button1: { icon: DefaultIconSet.ArrowLeft, text: "Back", onPress: () => { dispatch(ReduxAction.SelectedEventId.SetSelectedEventId(null)); } },
                        button2: { icon: DefaultIconSet.Eye, text: "Event Details", disabled: true },
                        button3: { icon: DefaultIconSet.Registry, text: "Book Now", onPress: onBookButtonPress }
                    };
        }
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
        return Object.entries(events).map(([eventId, event]) => (
            <EventRow.Component
                key={eventId}
                style={Styles.App__EventRow}
                title={event.title}
                location={event.location}
                date={new Date(event.date)}
                image={EventImages[eventId]}
                onPress={() => { dispatch(ReduxAction.SelectedEventId.SetSelectedEventId(eventId)); }}
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
                <Image style={Styles.App__EventDetails__Image} source={EventImages[selectedEventId]}/>
                <Text style={Styles.App__EventDetails__Description}>{selectedEvent.description}</Text>
            </View>
        );
    }

    function renderBookings()
    {
        return Object.entries(bookings).map(([bookingId, booking]) => (
            <EventRow.Component
                key={bookingId}
                style={Styles.App__EventRow}
                title={events[booking.eventId].title}
                location={events[booking.eventId].location}
                date={new Date(events[booking.eventId].date)}
                image={EventImages[booking.eventId]}
                onPress={() => { dispatch(ReduxAction.SelectedBookingId.SetSelectedBookingId(booking.eventId)); }}
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
}
