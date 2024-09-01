import { CursorType, Layer } from "@miniskylab/antimatter-framework";
import { Color } from "@miniskylab/antimatter-color-scheme";
import { TextStyle, TextVariant } from "@miniskylab/antimatter-text";
import { ViewStyle, ViewVariant } from "@miniskylab/antimatter-view";
import { ImageStyle, ImageVariant } from "@miniskylab/antimatter-image";
import { InputFieldStyle, InputFieldVariant, InputFieldContextHook } from "@miniskylab/antimatter-input-field";
import { PressableStyle, PressableVariant } from "@miniskylab/antimatter-pressable";
import { DropdownMenuStyle, DropdownMenuVariant, DropdownMenuContextHook } from "@miniskylab/antimatter-dropdown-menu";
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
    const eventRowContext = EventRow.ContextHook.useEventRowContext();

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
        cursor: eventRowContext.props.isSelected ? CursorType.Default : CursorType.Pointer,
        marginTop: -2,
        ...(pressableState.hovered || pressableState.pressed || eventRowContext.props.isSelected) && {
            borderColor: Color.Primary,
            backgroundColor: Color.Primary__a10,
            zIndex: Layer.Higher
        }
    };
};

const App__EventRow__TitleAndSubtitleContainer: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
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
        fontSize: 14,
        fontWeight: "bold",
        color: Color.Neutral
    };
};

const App__EventRow__StatusText: TextStyle = function (textProps)
{
    return {
        ...App__EventRow__Subtitle(textProps),
        marginLeft: 5,
        color: Color.Green
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
        StatusText: App__EventRow__StatusText,
        Image: App__EventRow__Image
    };
};

export const App__EventDetails__Root: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        paddingHorizontal: 30,
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
        color: Color.Neutral,
        marginBottom: 10
    };
};

export const App__EventDetails__LabelValueContainer: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        width: "100%",
        justifyContent: "flex-start",
        flexDirection: "row",
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
        marginTop: 20,
        color: Color.Neutral,
        fontSize: 16,
        textAlign: "justify"
    };
};

export const App__BookingForm__Root: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        paddingHorizontal: 30,
        paddingTop: 15
    };
};

const App__BookingForm__InputField__Root: ViewStyle = function (viewProps)
{
    const inputFieldContext = InputFieldContextHook.useInputFieldContext();

    return {
        ...InputFieldVariant.Default(inputFieldContext.props).Root(viewProps),
        marginTop: 15
    };
};

export const App__BookingForm__InputField: InputFieldStyle = function (inputFieldProps)
{
    return {
        ...InputFieldVariant.Default(inputFieldProps),
        Root: App__BookingForm__InputField__Root
    };
};

const App__BookingForm__DropdownMenu__Root: ViewStyle = function (viewProps)
{
    const dropdownMenuContext = DropdownMenuContextHook.useDropdownMenuContext();

    return {
        ...DropdownMenuVariant.Default(dropdownMenuContext.props).Root(viewProps),
        width: "100%",
        marginTop: 15
    };
};

export const App__BookingForm__DropdownMenu: DropdownMenuStyle = function (dropdownMenuProps)
{
    return {
        ...DropdownMenuVariant.Default(dropdownMenuProps),
        Root: App__BookingForm__DropdownMenu__Root
    };
};
