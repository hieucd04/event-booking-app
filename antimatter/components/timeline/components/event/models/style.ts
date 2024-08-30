import {WithoutStyle} from "@miniskylab/antimatter-framework";
import {IconStyle} from "@miniskylab/antimatter-icon";
import {ImageStyle} from "@miniskylab/antimatter-image";
import {TextStyle} from "@miniskylab/antimatter-text";
import {ViewStyle} from "@miniskylab/antimatter-view";
import {Props} from "./props";

export type Style = (eventProps: WithoutStyle<Props>) => {
    Root: ViewStyle;
    Icon: IconStyle;
    TriangleArrow: ViewStyle;
    Name: TextStyle;
    Hr: ViewStyle;
    Image: ImageStyle;
    TimeRow: ViewStyle;
    TimeBulletinIcon: IconStyle;
    DurationRow: ViewStyle;
    DurationBulletinIcon: IconStyle;
    LocationRow: ViewStyle;
    LocationBulletinIcon: IconStyle;
    DescriptionRow: ViewStyle;
    DescriptionBulletinIcon: IconStyle;
    StartDate: TextStyle;
    ArrowRightIcon: IconStyle;
    EndDate: TextStyle;
    Duration: TextStyle;
    Location: TextStyle;
    Description: TextStyle;
};
