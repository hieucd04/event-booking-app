import {Color} from "@miniskylab/antimatter-color-scheme";
import {getScreenSizeFromBreakpoint, Layer, useResponsiveStyle} from "@miniskylab/antimatter-framework";
import {type IconStyle, IconVariant} from "@miniskylab/antimatter-icon";
import {type ImageStyle, ImageVariant} from "@miniskylab/antimatter-image";
import {type TextStyle, TextVariant} from "@miniskylab/antimatter-text";
import {type ViewStyle, ViewVariant} from "@miniskylab/antimatter-view";
import {BootstrapEvent, Event} from "../components";
import {type TimelineStyle} from "../models";

const Timeline__Root: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        flex: 1,
        width: "100%",
        minWidth: 300,
        maxWidth: getScreenSizeFromBreakpoint("ExtraLarge")
    };
};

const Timeline__EventStream: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        flexDirection: "column",
        alignSelf: "stretch",
        ...useResponsiveStyle("Large", {
            flexDirection: "row",
            flexWrap: "wrap",
            columnGap: 130,
            marginTop: -60
        })
    };
};

const Timeline__VerticalLine: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 15,
        right: 0,
        width: 3,
        marginTop: 60,
        marginBottom: 50,
        backgroundColor: Color.Gray,
        zIndex: Layer.Lower,
        ...useResponsiveStyle("Large", {
            left: "50%",
            width: 6,
            marginLeft: -3,
            marginTop: 120,
            marginBottom: 80
        })
    };
};

const Timeline__Origin: IconStyle = function (iconProps)
{
    return {
        ...IconVariant.Default(iconProps),
        alignSelf: "flex-start",
        width: 30,
        height: 30,
        marginTop: 60,
        marginBottom: 20,
        fontSize: 30,
        color: Color.Gray,
        ...useResponsiveStyle("Large", {
            alignSelf: "center",
            flexBasis: "100%",
            height: 60,
            marginTop: 100,
            fontSize: 60
        })
    };
};

const Timeline__Event__Root: ViewStyle = function (viewProps)
{
    const eventContext = Event.ContextHook.useEventContext();

    return {
        ...ViewVariant.Default(viewProps),
        flexDirection: "column",
        alignSelf: "stretch",
        padding: 25,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: Color.Gray,
        marginBottom: 20,
        marginLeft: 45,
        backgroundColor: Color.Ambient,
        ...useResponsiveStyle("Large", {
            flexGrow: 1,
            flexBasis: "34%",
            marginLeft: 0,
            marginBottom: "auto",
            marginTop: eventContext.props.index % 2 !== 0 ? 220 : 60
        })
    };
};

const Timeline__Event__Icon: IconStyle = function (iconProps)
{
    const eventContext = Event.ContextHook.useEventContext();

    return {
        ...IconVariant.Default(iconProps),
        position: "absolute",
        top: 45,
        left: -45,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: Color.Gray,
        fontSize: 14,
        color: Color.Neutral,
        backgroundColor: Color.Ambient,
        ...useResponsiveStyle("Large", {
            top: 30,
            width: 60,
            height: 60,
            borderRadius: 30,
            borderWidth: 5,
            fontSize: 28,
            ...eventContext.props.index % 2 === 0 && {
                right: -96,
                left: undefined
            },
            ...eventContext.props.index % 2 !== 0 && {
                left: -96,
                right: undefined
            }
        })
    };
};

const Timeline__Event__TriangleArrow: ViewStyle = function (viewProps)
{
    const eventContext = Event.ContextHook.useEventContext();

    return {
        ...ViewVariant.Default(viewProps),
        position: "absolute",
        top: 50,
        left: -20,
        width: 0,
        height: 0,
        borderWidth: 10,
        borderStyle: "solid",
        borderColor: Color.Transparent,
        borderRightColor: Color.Gray,
        ...useResponsiveStyle("Large", {
            top: 40,
            borderWidth: 20,
            ...eventContext.props.index % 2 === 0 && {
                right: -40,
                left: undefined,
                borderLeftColor: Color.Gray,
                borderRightColor: Color.Transparent
            },
            ...eventContext.props.index % 2 !== 0 && {
                left: -40,
                right: undefined,
                borderRightColor: Color.Gray,
                borderLeftColor: Color.Transparent
            }
        })
    };
};

const Timeline__Event__Name: TextStyle = function (textProps)
{
    return {
        ...TextVariant.Default(textProps),
        alignItems: "flex-start",
        alignSelf: "stretch",
        lineHeight: 28,
        color: Color.White,
        fontSize: 20,
        fontWeight: "bold"
    };
};

const Timeline__Event__Hr: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        alignSelf: "stretch",
        marginTop: 6,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: Color.Gray
    };
};

const Timeline__Event__Image: ImageStyle = function (imageProps)
{
    return {
        ...ImageVariant.Default(imageProps),
        width: "100%",
        height: undefined,
        aspectRatio: 2,
        resizeMode: "contain",
        marginTop: 15,
        marginBottom: 5
    };
};

const Timeline__Event__TimeRow: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        minHeight: 25,
        marginTop: 10
    };
};

const Timeline__Event__TimeBulletinIcon: IconStyle = function (iconProps)
{
    return {
        ...IconVariant.Default(iconProps),
        minWidth: 20,
        lineHeight: 25,
        marginRight: 10,
        fontSize: 18,
        color: Color.Neutral
    };
};

const Timeline__Event__DurationRow: ViewStyle = function (viewProps)
{
    return {
        ...Timeline__Event__TimeRow(viewProps)
    };
};

const Timeline__Event__DurationBulletinIcon: IconStyle = function (iconProps)
{
    return {
        ...Timeline__Event__TimeBulletinIcon(iconProps)
    };
};

const Timeline__Event__LocationRow: ViewStyle = function (viewProps)
{
    return {
        ...Timeline__Event__TimeRow(viewProps)
    };
};

const Timeline__Event__LocationBulletinIcon: IconStyle = function (iconProps)
{
    return {
        ...Timeline__Event__TimeBulletinIcon(iconProps)
    };
};

const Timeline__Event__DescriptionRow: ViewStyle = function (viewProps)
{
    return {
        ...Timeline__Event__TimeRow(viewProps)
    };
};

const Timeline__Event__DescriptionBulletinIcon: IconStyle = function (iconProps)
{
    return {
        ...Timeline__Event__TimeBulletinIcon(iconProps),
        alignSelf: "baseline"
    };
};

const Timeline__Event__StartDate: TextStyle = function (textProps)
{
    return {
        ...TextVariant.Default(textProps),
        lineHeight: 25,
        fontSize: 14,
        color: Color.Neutral
    };
};

const Timeline__Event__ArrowRightIcon: IconStyle = function (iconProps)
{
    return {
        ...IconVariant.Default(iconProps),
        width: 20,
        lineHeight: 25,
        marginHorizontal: 10,
        fontSize: 14,
        color: Color.Neutral
    };
};

const Timeline__Event__EndDate: TextStyle = function (textProps)
{
    return {
        ...TextVariant.Default(textProps),
        lineHeight: 25,
        fontSize: 14,
        color: Color.Neutral
    };
};

const Timeline__Event__Duration: TextStyle = function (textProps)
{
    return {
        ...TextVariant.Default(textProps),
        flex: 1,
        alignItems: "flex-start",
        lineHeight: 25,
        fontSize: 14,
        color: Color.Neutral
    };
};

const Timeline__Event__Location: TextStyle = function (textProps)
{
    return {
        ...TextVariant.Default(textProps),
        flex: 1,
        alignItems: "flex-start",
        lineHeight: 25,
        fontSize: 14,
        color: Color.Neutral
    };
};

const Timeline__Event__Description: TextStyle = function (textProps)
{
    return {
        ...TextVariant.Default(textProps),
        flex: 1,
        alignItems: "flex-start",
        lineHeight: 25,
        fontSize: 14,
        color: Color.Neutral
    };
};

const Timeline__Event: Event.Style = function ()
{
    return {
        Root: Timeline__Event__Root,
        Icon: Timeline__Event__Icon,
        TriangleArrow: Timeline__Event__TriangleArrow,
        Name: Timeline__Event__Name,
        Hr: Timeline__Event__Hr,
        Image: Timeline__Event__Image,
        TimeRow: Timeline__Event__TimeRow,
        TimeBulletinIcon: Timeline__Event__TimeBulletinIcon,
        DurationRow: Timeline__Event__DurationRow,
        DurationBulletinIcon: Timeline__Event__DurationBulletinIcon,
        LocationRow: Timeline__Event__LocationRow,
        LocationBulletinIcon: Timeline__Event__LocationBulletinIcon,
        DescriptionRow: Timeline__Event__DescriptionRow,
        DescriptionBulletinIcon: Timeline__Event__DescriptionBulletinIcon,
        StartDate: Timeline__Event__StartDate,
        ArrowRightIcon: Timeline__Event__ArrowRightIcon,
        EndDate: Timeline__Event__EndDate,
        Duration: Timeline__Event__Duration,
        Location: Timeline__Event__Location,
        Description: Timeline__Event__Description
    };
};

const Timeline__EventPlaceholder: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        flexGrow: 1,
        flexBasis: "34%"
    };
};

const Timeline__BootstrapEvent__Root: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        alignSelf: "stretch",
        paddingTop: 30,
        paddingBottom: 25,
        paddingHorizontal: 25,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: Color.Gray,
        marginTop: -110,
        marginLeft: 45,
        backgroundColor: Color.Ambient,
        ...useResponsiveStyle("Large", {
            maxWidth: undefined,
            marginTop: 10,
            marginLeft: 0
        })
    };
};

const Timeline__BootstrapEvent__TriangleArrow: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        position: "absolute",
        top: 65,
        left: -18,
        width: 0,
        height: 0,
        borderWidth: 9,
        borderStyle: "solid",
        borderColor: Color.Transparent,
        borderRightColor: Color.Gray,
        ...useResponsiveStyle("Large", {
            top: -36,
            left: "50%",
            marginLeft: -18,
            borderWidth: 18,
            borderRightColor: Color.Transparent,
            borderBottomColor: Color.Gray
        })
    };
};

const Timeline__BootstrapEvent__Icon: IconStyle = function (iconProps)
{
    return {
        ...IconVariant.Default(iconProps),
        width: 35,
        height: 35,
        marginBottom: 18,
        fontSize: 50,
        color: Color.Gray,
        ...useResponsiveStyle("Large", {
            width: 45,
            height: 45,
            marginBottom: 23,
            fontSize: 60
        })
    };
};

const Timeline__BootstrapEvent__Name: TextStyle = function (textProps)
{
    return {
        ...TextVariant.Default(textProps),
        lineHeight: 28,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: Color.Gray,
        ...useResponsiveStyle("Large", {
            marginBottom: 10,
            fontSize: 30
        })
    };
};

const Timeline__BootstrapEvent__Description: TextStyle = function (textProps)
{
    return {
        ...TextVariant.Default(textProps),
        width: "100%",
        lineHeight: 21,
        textAlign: "center",
        marginTop: 10,
        fontSize: 14,
        color: Color.Gray,
        ...useResponsiveStyle("Large", {
            fontSize: 17
        })
    };
};

const Timeline__BootstrapEvent: BootstrapEvent.Style = function ()
{
    return {
        Root: Timeline__BootstrapEvent__Root,
        TriangleArrow: Timeline__BootstrapEvent__TriangleArrow,
        Icon: Timeline__BootstrapEvent__Icon,
        Name: Timeline__BootstrapEvent__Name,
        Description: Timeline__BootstrapEvent__Description
    };
};

export const Default: TimelineStyle = function ()
{
    return {
        Root: Timeline__Root,
        EventStream: Timeline__EventStream,
        VerticalLine: Timeline__VerticalLine,
        Origin: Timeline__Origin,
        Event: Timeline__Event,
        EventPlaceholder: Timeline__EventPlaceholder,
        BootstrapEvent: Timeline__BootstrapEvent
    };
};
