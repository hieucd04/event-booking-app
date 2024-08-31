import { ComponentProps, GestureResponderEventHandler } from "@miniskylab/antimatter-framework";
import { type ImageSourcePropType } from "react-native";
import type { Data } from "../types";
import { Style } from "./style";

export type Props = ComponentProps<Style> & {
    readonly title: string;
    readonly location: string;
    readonly date: Date;
    readonly image: ImageSourcePropType;
    readonly onPress?: GestureResponderEventHandler;
    readonly onChange?: (newEventData: Data) => void;
}
