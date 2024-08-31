import { View } from "@miniskylab/antimatter-view";
import { DataList } from "@miniskylab/antimatter-data-list";
import { DefaultIconSet } from "@miniskylab/antimatter-typography";
import { useDispatch, useSelector } from "react-redux";
import React, { useMemo } from "react";
import { EventRow } from "./components";
import { createEventsSelector } from "../redux-selectors";
import { EventImages } from "./event-images";
import * as Styles from "./styles";

export function Application()
{
    const dispatch = useDispatch();

    const eventsSelector = useMemo(createEventsSelector, []);

    const events = useSelector(eventsSelector);

    return (
        <View style={Styles.App__Root}>
            <View style={Styles.App__MainContent}>
                <DataList
                    button1={{
                        icon: DefaultIconSet.PlusCircle,
                        text: "Add New",
                        onPress: () => { alert("Lorem Ipsum"); }
                    }}
                    button2={{
                        icon: DefaultIconSet.Eye,
                        text: "Read-Only",
                        onPress: () => { alert("Lorem Ipsum"); }
                    }}
                    button3={{
                        icon: DefaultIconSet.XMarkInsideCircle,
                        text: "Cancel",
                        onPress: () => { alert("Lorem Ipsum"); }
                    }}
                >
                    {Object.entries(events).map(([eventId, event]) => (
                        <EventRow.Component
                            key={eventId}
                            style={Styles.App__EventRow}
                            title={event.title}
                            location={event.location}
                            date={event.date}
                            image={EventImages[eventId]}
                        />
                    ))}
                </DataList>
            </View>
        </View>
    );
}
