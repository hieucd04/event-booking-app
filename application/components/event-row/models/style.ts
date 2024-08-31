import { WithoutStyle } from "@miniskylab/antimatter-framework";
import { PressableStyle } from "@miniskylab/antimatter-pressable";
import { TextStyle } from "@miniskylab/antimatter-text";
import { ViewStyle } from "@miniskylab/antimatter-view";
import { ImageStyle } from "@miniskylab/antimatter-image";
import { Props } from "./props";

export type Style = (eventRowProps: WithoutStyle<Props>) => {
    Root: PressableStyle;
    TitleAndSubtitleContainer: ViewStyle;
    Title: TextStyle;
    Subtitle: TextStyle;
    Image: ImageStyle;
};
