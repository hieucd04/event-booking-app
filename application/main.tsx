import { View } from "@miniskylab/antimatter-view";
import { Text } from "@miniskylab/antimatter-text";
import { Image } from "@miniskylab/antimatter-image";
import { DataList } from "@miniskylab/antimatter-data-list";
import { DefaultIconSet } from "@miniskylab/antimatter-typography";
import { useDispatch, useSelector } from "react-redux";
import React, { useMemo } from "react";
import {
    createEventsSelector,
    createSelectedEventIdSelector,
    createSelectedBookingIdSelector,
    createActiveScreenNameSelector
} from "../redux-selectors";
import { ReduxAction } from "../redux-slices";
import { EventImages } from "./event-images";
import { EventRow } from "./components";
import * as Styles from "./styles";
import { DateFormat, GregorianCalendar } from "@miniskylab/antimatter-framework";

export function Application()
{
    const dispatch = useDispatch();

    const eventsSelector = useMemo(createEventsSelector, []);
    const selectedEventIdSelector = useMemo(createSelectedEventIdSelector, []);
    const selectedBookingIdSelector = useMemo(createSelectedBookingIdSelector, []);
    const activeScreenNameSelector = useMemo(createActiveScreenNameSelector, []);

    const events = useSelector(eventsSelector);
    const selectedEventId = useSelector(selectedEventIdSelector);
    const selectedBookingId = useSelector(selectedBookingIdSelector);
    const activeScreenName = useSelector(activeScreenNameSelector);

    const selectedEvent = selectedEventId ? events[selectedEventId] : undefined;

    return (
        <View style={Styles.App__Root}>
            <View style={Styles.App__MainContent}>
                <DataList
                    button1={{ icon: DefaultIconSet.PlusCircle, text: "Add New", onPress: () => { alert("Lorem Ipsum"); } }}
                    button2={{ icon: DefaultIconSet.Eye, text: "Read-Only", disabled: true, onPress: () => { alert("Lorem Ipsum"); } }}
                    button3={{ icon: DefaultIconSet.XMarkInsideCircle, text: "Cancel", onPress: () => { alert("Lorem Ipsum"); } }}
                >
                    {renderContent()}
                </DataList>
            </View>
        </View>
    );

    function renderContent()
    {
        switch (activeScreenName)
        {
            case "event":
                return !selectedEventId ? renderEvents() : renderEventDetails();

            case "booking":
                return selectedBookingId === undefined || selectedBookingId === null
                    ? renderBookings()
                    : selectedBookingId === ""
                        ? renderBookingForm()
                        : renderBookingDetails();
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
        return <View></View>;
    }

    function renderBookingDetails()
    {
        return <View></View>;
    }
    
    function renderBookingForm()
    {
        return <View></View>;
    }
}
