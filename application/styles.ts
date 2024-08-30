import { Color } from "@miniskylab/antimatter-color-scheme";
import { ViewStyle } from "@miniskylab/antimatter-view";

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
