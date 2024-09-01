import { ComponentProps, GestureResponderEventHandler } from "@miniskylab/antimatter-framework";
import { type ImageSourcePropType } from "react-native";
import { Style } from "./style";

export type Props = ComponentProps<Style> & {
    readonly title: string;
    readonly location: string;
    readonly date: Date;
    readonly image: ImageSourcePropType;
    readonly isBooked?: boolean;
    readonly isSelected?: boolean;
    readonly onPress?: GestureResponderEventHandler;
}
