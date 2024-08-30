import {type AllPropertiesMustPresent, Ts, useComputedStyle} from "@miniskylab/antimatter-framework";
import {View} from "@miniskylab/antimatter-view";
import React, {JSX} from "react";
import {type Props} from "./models";

export function Component({
    id,
    style,
    children,
    onReadyToUnmount
}: Props): JSX.Element
{
    const props: AllPropertiesMustPresent<Props> = {
        id, style, children, onReadyToUnmount
    };

    Ts.Error.throwIfNullOrUndefined(style);
    const {computedStyle} = useComputedStyle(style, props);

    return (
        <View style={computedStyle}>
            {children}
        </View>
    );
}
