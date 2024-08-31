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
}
