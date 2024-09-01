import { Color } from "@miniskylab/antimatter-color-scheme";
import { TextStyle, TextVariant } from "@miniskylab/antimatter-text";
import { ViewStyle, ViewVariant } from "@miniskylab/antimatter-view";
import { ImageStyle, ImageVariant } from "@miniskylab/antimatter-image";
import { PressableStyle, PressableVariant } from "@miniskylab/antimatter-pressable";
import { EventRow } from "./components";

export const App__Root: ViewStyle = function ()
{
    return {
        flex: 1,
        alignItems: "center",
        backgroundColor: Color.Ambient
    };
};

export const App__MainContent: ViewStyle = function ()
{
    return {
        flex: 1,
        width: "100%",
        maxWidth: 600
    };
};

const App__EventRow__Root: PressableStyle = function (pressableProps, pressableState)
{
    return {
        ...PressableVariant.Default(pressableProps, pressableState),
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingTop: 8,
        paddingBottom: 10,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderStyle: "solid",
        borderColor: Color.Neutral,
        marginTop: -2,
    };
};

const App__EventRow__TitleAndSubtitleContainer: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "flex-start",
        height: "100%",
        paddingLeft: 5
    };
};

const App__EventRow__Title: TextStyle = function (textProps)
{
    return {
        ...TextVariant.Default(textProps),
        alignItems: "flex-start",
        width: "95%",
        height: 23,
        marginTop: -1,
        fontSize: 18,
        fontWeight: "bold",
        color: Color.Neutral
    };
};

const App__EventRow__Subtitle: TextStyle = function (textProps)
{
    return {
        ...TextVariant.Default(textProps),
        lineHeight: 18,
        marginRight: 10,
        fontSize: 14,
        fontWeight: "bold",
        color: Color.Neutral
    };
};

const App__EventRow__Image: ImageStyle = function (imageProps)
{
    return {
        ...ImageVariant.Default(imageProps),
        width: 40,
        height: 40,
        aspectRatio: 1,
        resizeMode: "cover",
        marginVertical: 2
    };
};

export const App__EventRow: EventRow.Style = function ()
{
    return {
        Root: App__EventRow__Root,
        TitleAndSubtitleContainer: App__EventRow__TitleAndSubtitleContainer,
        Title: App__EventRow__Title,
        Subtitle: App__EventRow__Subtitle,
        Image: App__EventRow__Image
    };
};

export const App__EventDetails__Root: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        paddingTop: 15
    };
};

export const App__EventDetails__Title: TextStyle = function (textProps)
{
    return {
        ...TextVariant.Default(textProps),
        fontSize: 24,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: Color.Neutral
    };
};

export const App__EventDetails__LabelValueContainer: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        width: "100%",
        justifyContent: "flex-start",
        flexDirection: "row",
        paddingHorizontal: 30,
        marginTop: 15,
    };
};

export const App__EventDetails__Value: TextStyle = function (textProps)
{
    return {
        ...TextVariant.Default(textProps),
        fontSize: 16,
        fontWeight: "bold",
        color: Color.Neutral
    };
};

export const App__EventDetails__Label: TextStyle = function (textProps)
{
    return {
        ...App__EventDetails__Value(textProps),
        paddingRight: 5,
        color: Color.Primary
    };
};

export const App__EventDetails__Image: ImageStyle = function (imageProps)
{
    return {
        ...ImageVariant.Default(imageProps),
        marginTop: 20
    };
};

export const App__EventDetails__Description: TextStyle = function (textProps)
{
    return {
        ...TextVariant.Default(textProps),
        width: "100%",
        lineHeight: 24,
        alignItems: "flex-start",
        paddingHorizontal: 30,
        marginTop: 20,
        color: Color.Neutral,
        fontSize: 16,
        textAlign: "justify"
    };
};
