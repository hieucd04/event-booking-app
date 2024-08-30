import {WithoutStyle} from "@miniskylab/antimatter-framework";
import {IconStyle} from "@miniskylab/antimatter-icon";
import {ViewStyle} from "@miniskylab/antimatter-view";
import {BootstrapEvent, Event} from "../components";
import {TimelineProps} from "./props";

export type TimelineStyle = (timelineProps: WithoutStyle<TimelineProps>) => {
    Root: ViewStyle;
    EventStream: ViewStyle;
    VerticalLine: ViewStyle;
    Origin: IconStyle;
    Event: Event.Style;
    EventPlaceholder: ViewStyle;
    BootstrapEvent: BootstrapEvent.Style;
};
