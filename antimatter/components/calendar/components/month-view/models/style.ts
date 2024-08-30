import {ButtonStyle} from "@miniskylab/antimatter-button";
import {WithoutStyle} from "@miniskylab/antimatter-framework";
import {ViewStyle} from "@miniskylab/antimatter-view";
import {Props} from "./props";

export type Style = (monthViewProps: WithoutStyle<Props>) => {
    Root: ViewStyle;
    GridCell: ButtonStyle;
};
