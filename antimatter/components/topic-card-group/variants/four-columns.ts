import {getScreenSizeFromBreakpoint, useResponsiveStyle} from "@miniskylab/antimatter-framework";
import {type ViewStyle} from "@miniskylab/antimatter-view";
import {Card} from "../components";
import {TopicCardGroupContextHook} from "../hooks";
import {type TopicCardGroupStyle} from "../models";
import {ThreeColumns} from "./three-columns";

const TopicCardGroup__Root: ViewStyle = function (viewProps)
{
    const topicCardGroupContext = TopicCardGroupContextHook.useTopicCardGroupContext();

    const inheritedStyle = ThreeColumns(topicCardGroupContext.props).Root(viewProps);

    return {
        ...inheritedStyle,
        maxWidth: getScreenSizeFromBreakpoint("ExtraLarge"),
        ...useResponsiveStyle("ExtraLarge", {
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            justifyContent: "flex-start"
        })
    };
};

const TopicCardGroup__Card__Root: ViewStyle = function (viewProps)
{
    const cardContext = Card.ContextHook.useCardContext();
    const topicCardGroupContext = TopicCardGroupContextHook.useTopicCardGroupContext();

    const inheritedStyle = ThreeColumns(topicCardGroupContext.props)
        .Card(cardContext.props)
        .Root(viewProps);

    return {
        ...inheritedStyle,
        ...useResponsiveStyle("ExtraLarge", {
            flexBasis: "25%",
            marginVertical: 0,
            opacity: 1
        })
    };
};

const TopicCardGroup__Card__Content: ViewStyle = function (viewProps)
{
    const cardContext = Card.ContextHook.useCardContext();
    const topicCardGroupContext = TopicCardGroupContextHook.useTopicCardGroupContext();

    const inheritedStyle = ThreeColumns(topicCardGroupContext.props)
        .Card(cardContext.props)
        .Content(viewProps);

    return {
        ...inheritedStyle,
        ...useResponsiveStyle("ExtraLarge", {
            height: "auto"
        })
    };
};

const TopicCardGroup__Card__HorizontalMargin: ViewStyle = function (viewProps)
{
    const cardContext = Card.ContextHook.useCardContext();
    const topicCardGroupContext = TopicCardGroupContextHook.useTopicCardGroupContext();

    const inheritedStyle = ThreeColumns(topicCardGroupContext.props)
        .Card(cardContext.props)
        .HorizontalMargin(viewProps);

    return {
        ...inheritedStyle,
        ...useResponsiveStyle("ExtraLarge", {
            display: "none"
        })
    };
};

const TopicCardGroup__Card: Card.Style = function (cardProps)
{
    const topicCardGroupContext = TopicCardGroupContextHook.useTopicCardGroupContext();

    const inheritedStyle = ThreeColumns(topicCardGroupContext.props).Card(cardProps);

    return {
        ...inheritedStyle,
        Root: TopicCardGroup__Card__Root,
        Content: TopicCardGroup__Card__Content,
        HorizontalMargin: TopicCardGroup__Card__HorizontalMargin
    };
};

export const FourColumns: TopicCardGroupStyle = function (topicCardGroupProps)
{
    const inheritedStyle = ThreeColumns(topicCardGroupProps);

    return {
        ...inheritedStyle,
        Root: TopicCardGroup__Root,
        Card: TopicCardGroup__Card
    };
};
