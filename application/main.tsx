import { View } from "@miniskylab/antimatter-view";
import { DataList } from "@miniskylab/antimatter-data-list";
import { DefaultIconSet } from "@miniskylab/antimatter-typography";
import { useDispatch, useSelector } from "react-redux";
import React, { useMemo } from "react";
import { EventRow } from "./components";
import {
    createEventsSelector,
    createSelectedEventIdSelector,
    createSelectedBookingIdSelector,
    createActiveScreenNameSelector
} from "../redux-selectors";
import { EventImages } from "./event-images";
import * as Styles from "./styles";
import { ReduxAction } from "../redux-slices";

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

    return (
        <View style={Styles.App__Root}>
            <View style={Styles.App__MainContent}>
                <DataList
                    button1={{ icon: DefaultIconSet.PlusCircle, text: "Add New", onPress: () => { alert("Lorem Ipsum"); } }}
                    button2={{ icon: DefaultIconSet.Eye, text: "Read-Only", onPress: () => { alert("Lorem Ipsum"); } }}
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
        return <View></View>;
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
