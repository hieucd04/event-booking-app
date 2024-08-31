import { type AllPropertiesMustPresent, DateFormat, GregorianCalendar, Ts, useComponentContext, useComputedStyle } from "@miniskylab/antimatter-framework";
import { Text } from "@miniskylab/antimatter-text";
import { Image } from "@miniskylab/antimatter-image";
import { Pressable } from "@miniskylab/antimatter-pressable";
import { View } from "@miniskylab/antimatter-view";
import React, { JSX } from "react";
import { Props, EventRowContext } from "./models";

export function Component({
    style,
    title,
    location,
    date,
    image,
    onPress,
    onChange
}: Props): JSX.Element
{
    const props: AllPropertiesMustPresent<Props> = {
        style, title, location, date, image, onPress, onChange
    };

    const context = useComponentContext<EventRowContext>({ props });

    Ts.Error.throwIfNullOrUndefined(style);
    const { computedStyle } = useComputedStyle(style, props);

    return (
        <EventRowContext.Provider value={context}>
            <Pressable style={computedStyle.Root}>
                <Image style={computedStyle.Image} source={image} />
                <View style={computedStyle.TitleAndSubtitleContainer}>
                    <Text style={computedStyle.Title}>{title}</Text>
                    <Text style={computedStyle.Subtitle}>{`${GregorianCalendar.toString(date, DateFormat.Full)} - ${location}`}</Text>
                </View>
            </Pressable>
        </EventRowContext.Provider>
    );
}
