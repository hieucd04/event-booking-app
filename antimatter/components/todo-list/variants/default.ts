import {ButtonContextHook, type ButtonStyle, ButtonVariant} from "@miniskylab/antimatter-button";
import {Color} from "@miniskylab/antimatter-color-scheme";
import {DataListAnimationHook, DataListContextHook, type DataListStyle, DataListVariant} from "@miniskylab/antimatter-data-list";
import {DropdownMenuContextHook, type DropdownMenuStyle, DropdownMenuVariant, MenuItemStatus} from "@miniskylab/antimatter-dropdown-menu";
import {CursorType, Layer} from "@miniskylab/antimatter-framework";
import {type IconStyle, IconVariant} from "@miniskylab/antimatter-icon";
import {InputFieldContextHook, type InputFieldStyle, InputFieldVariant} from "@miniskylab/antimatter-input-field";
import {ProgressStripesContextHook, type ProgressStripesStyle, ProgressStripesVariant} from "@miniskylab/antimatter-motion-graphics";
import {
    NumericInputFieldContextHook,
    type NumericInputFieldStyle,
    NumericInputFieldVariant
} from "@miniskylab/antimatter-numeric-input-field";
import {PressableContextHook, type PressableStyle, PressableVariant} from "@miniskylab/antimatter-pressable";
import {type ScrollViewStyle} from "@miniskylab/antimatter-scroll-view";
import {type TextStyle, TextVariant} from "@miniskylab/antimatter-text";
import {type TextInputStyle} from "@miniskylab/antimatter-text-input";
import {Status, ToggleContextHook, type ToggleStyle, ToggleVariant} from "@miniskylab/antimatter-toggle";
import {type ViewStyle, ViewVariant} from "@miniskylab/antimatter-view";
import {Reminder} from "../components";
import {TodoListContextHook} from "../hooks";
import {type TodoListStyle} from "../models";

const TodoList__DataList__Button1__Icon: IconStyle = function (iconProps)
{
    const buttonContext = ButtonContextHook.useButtonContext();
    const dataListContext = DataListContextHook.useDataListContext();
    const todoListContext = TodoListContextHook.useTodoListContext();
    const pressableContext = PressableContextHook.usePressableContext();

    const isAlarmMode = todoListContext.props.mode === Reminder.Mode.Alarm;
    const isDraftMode = todoListContext.props.mode === Reminder.Mode.Draft;
    const isEditMode = todoListContext.props.mode === Reminder.Mode.Edit;
    const isDeleteMode = todoListContext.props.mode === Reminder.Mode.Delete;

    const inheritedStyle = DataListVariant.Default(dataListContext.props)
        .Button1(buttonContext.props)
        .Icon(iconProps);

    return {
        ...inheritedStyle,
        color: pressableContext.state.pressed
            ? Color.Gray
            : pressableContext.state.hovered
                ? Color.White
                : isAlarmMode
                    ? Color.Warning
                    : isDraftMode || isEditMode
                        ? Color.Primary
                        : isDeleteMode
                            ? Color.Tomato
                            : Color.Neutral
    };
};

const TodoList__DataList__Button1__Label: TextStyle = function (textProps)
{
    const buttonContext = ButtonContextHook.useButtonContext();
    const dataListContext = DataListContextHook.useDataListContext();
    const todoListContext = TodoListContextHook.useTodoListContext();
    const pressableContext = PressableContextHook.usePressableContext();

    const isAlarmMode = todoListContext.props.mode === Reminder.Mode.Alarm;
    const isDraftMode = todoListContext.props.mode === Reminder.Mode.Draft;
    const isEditMode = todoListContext.props.mode === Reminder.Mode.Edit;
    const isDeleteMode = todoListContext.props.mode === Reminder.Mode.Delete;

    const inheritedStyle = DataListVariant.Default(dataListContext.props)
        .Button1(buttonContext.props)
        .Label(textProps);

    return {
        ...inheritedStyle,
        color: pressableContext.state.pressed
            ? Color.Gray
            : pressableContext.state.hovered
                ? Color.White
                : isAlarmMode
                    ? Color.Warning
                    : isDraftMode || isEditMode
                        ? Color.Primary
                        : isDeleteMode
                            ? Color.Tomato
                            : Color.Neutral
    };
};

const TodoList__DataList__Button1: ButtonStyle = function (buttonProps)
{
    const dataListContext = DataListContextHook.useDataListContext();

    const inheritedStyle = DataListVariant.Default(dataListContext.props)
        .Button1(buttonProps);

    return {
        ...inheritedStyle,
        Icon: TodoList__DataList__Button1__Icon,
        Label: TodoList__DataList__Button1__Label
    };
};

const TodoList__DataList__Button2__Root: PressableStyle = function (pressableProps, pressableState)
{
    const buttonContext = ButtonContextHook.useButtonContext();
    const dataListContext = DataListContextHook.useDataListContext();
    const todoListContext = TodoListContextHook.useTodoListContext();

    const isAlarmMode = todoListContext.props.mode === Reminder.Mode.Alarm;
    const isDraftMode = todoListContext.props.mode === Reminder.Mode.Draft;
    const isReadOnlyMode = todoListContext.props.mode === Reminder.Mode.ReadOnly;

    const inheritedStyle = DataListVariant.Default(dataListContext.props)
        .Button2(buttonContext.props)
        .Root(pressableProps, pressableState);

    return {
        ...inheritedStyle,
        backgroundColor: isAlarmMode
            ? Color.Warning
            : isDraftMode
                ? Color.Primary
                : isReadOnlyMode
                    ? Color.Neutral
                    : Color.Transparent
    };
};

const TodoList__DataList__Button2__Icon: IconStyle = function (iconProps)
{
    const buttonContext = ButtonContextHook.useButtonContext();
    const dataListContext = DataListContextHook.useDataListContext();
    const todoListContext = TodoListContextHook.useTodoListContext();
    const pressableContext = PressableContextHook.usePressableContext();

    const isAlarmMode = todoListContext.props.mode === Reminder.Mode.Alarm;
    const isDraftMode = todoListContext.props.mode === Reminder.Mode.Draft;
    const isEditMode = todoListContext.props.mode === Reminder.Mode.Edit;
    const isDeleteMode = todoListContext.props.mode === Reminder.Mode.Delete;
    const isReadOnlyMode = todoListContext.props.mode === Reminder.Mode.ReadOnly;

    const inheritedStyle = DataListVariant.Default(dataListContext.props)
        .Button2(buttonContext.props)
        .Icon(iconProps);

    return {
        ...inheritedStyle,
        color: pressableContext.state.pressed
            ? Color.Gray
            : pressableContext.state.hovered
                ? Color.White
                : isDraftMode || isReadOnlyMode || isAlarmMode
                    ? Color.Background
                    : isEditMode
                        ? Color.Primary
                        : isDeleteMode
                            ? Color.Tomato
                            : Color.Neutral
    };
};

const TodoList__DataList__Button2__Label: TextStyle = function (textProps)
{
    const buttonContext = ButtonContextHook.useButtonContext();
    const dataListContext = DataListContextHook.useDataListContext();
    const todoListContext = TodoListContextHook.useTodoListContext();
    const pressableContext = PressableContextHook.usePressableContext();

    const isAlarmMode = todoListContext.props.mode === Reminder.Mode.Alarm;
    const isDraftMode = todoListContext.props.mode === Reminder.Mode.Draft;
    const isEditMode = todoListContext.props.mode === Reminder.Mode.Edit;
    const isDeleteMode = todoListContext.props.mode === Reminder.Mode.Delete;
    const isReadOnlyMode = todoListContext.props.mode === Reminder.Mode.ReadOnly;

    const inheritedStyle = DataListVariant.Default(dataListContext.props)
        .Button2(buttonContext.props)
        .Label(textProps);

    return {
        ...inheritedStyle,
        color: pressableContext.state.pressed
            ? Color.Gray
            : pressableContext.state.hovered
                ? Color.White
                : isDraftMode || isReadOnlyMode || isAlarmMode
                    ? Color.Background
                    : isEditMode
                        ? Color.Primary
                        : isDeleteMode
                            ? Color.Tomato
                            : Color.Neutral
    };
};

const TodoList__DataList__Button2: ButtonStyle = function (buttonProps)
{
    const dataListContext = DataListContextHook.useDataListContext();

    const inheritedStyle = DataListVariant.Default(dataListContext.props)
        .Button2(buttonProps);

    return {
        ...inheritedStyle,
        Root: TodoList__DataList__Button2__Root,
        Icon: TodoList__DataList__Button2__Icon,
        Label: TodoList__DataList__Button2__Label
    };
};

const TodoList__DataList__Button3__Icon: IconStyle = function (iconProps)
{
    const buttonContext = ButtonContextHook.useButtonContext();
    const dataListContext = DataListContextHook.useDataListContext();
    const pressableContext = PressableContextHook.usePressableContext();

    const inheritedStyle = DataListVariant.Default(dataListContext.props)
        .Button3(buttonContext.props)
        .Icon(iconProps);

    return {
        ...inheritedStyle,
        color: pressableContext.state.pressed
            ? Color.Gray
            : pressableContext.state.hovered
                ? Color.White
                : Color.Neutral
    };
};

const TodoList__DataList__Button3__Label: TextStyle = function (textProps)
{
    const buttonContext = ButtonContextHook.useButtonContext();
    const dataListContext = DataListContextHook.useDataListContext();
    const pressableContext = PressableContextHook.usePressableContext();

    const inheritedStyle = DataListVariant.Default(dataListContext.props)
        .Button3(buttonContext.props)
        .Label(textProps);

    return {
        ...inheritedStyle,
        color: pressableContext.state.pressed
            ? Color.Gray
            : pressableContext.state.hovered
                ? Color.White
                : Color.Neutral
    };
};

const TodoList__DataList__Button3: ButtonStyle = function (buttonProps)
{
    const dataListContext = DataListContextHook.useDataListContext();

    const inheritedStyle = DataListVariant.Default(dataListContext.props)
        .Button3(buttonProps);

    return {
        ...inheritedStyle,
        Icon: TodoList__DataList__Button3__Icon,
        Label: TodoList__DataList__Button3__Label
    };
};

const TodoList__DataList: DataListStyle = function (dataListProps)
{
    return {
        ...DataListVariant.Default(dataListProps),
        Button1: TodoList__DataList__Button1,
        Button2: TodoList__DataList__Button2,
        Button3: TodoList__DataList__Button3
    };
};

const TodoList__Reminder__Root: PressableStyle = function (pressableProps, pressableState)
{
    const todoListContext = TodoListContextHook.useTodoListContext();
    const reminderContext = Reminder.ContextHook.useReminderContext();

    const hasSelectedReminder = !!todoListContext.props.selectedReminder;
    const isReadOnlyMode = todoListContext.props.mode === Reminder.Mode.ReadOnly;
    const isSelectableReminder = isReadOnlyMode && !hasSelectedReminder;
    const isAlarmedReminder = reminderContext.props.mode === Reminder.Mode.Alarm;
    const isHoveredReminder = pressableState.hovered && isSelectableReminder;
    const isSelectedReminder = reminderContext.props.id === todoListContext.props.selectedReminder?.id;
    const isHighlightedReminder = isAlarmedReminder || isSelectedReminder || isHoveredReminder;

    return {
        ...PressableVariant.Default(pressableProps, pressableState),
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        alignContent: "flex-start",
        justifyContent: "flex-start",
        paddingTop: 8,
        paddingBottom: 12,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderStyle: "solid",
        borderColor: Color.Neutral,
        marginTop: -2,
        cursor: isSelectableReminder ? CursorType.Pointer : CursorType.Default,
        overflow: "hidden",
        animations: () =>
        {
            const flashHighlightAnimation = DataListAnimationHook.useFlashHighlightAnimation();
            const elasticHeightAnimation = DataListAnimationHook.useElasticHeightAnimation(66, 2, 181, 133);

            return reminderContext.props.isToBeDeleted
                ? [() => flashHighlightAnimation, () => elasticHeightAnimation]
                : [() => elasticHeightAnimation, () => flashHighlightAnimation];
        },
        animationOverride: {
            ...isHighlightedReminder && {
                zIndex: Layer.AlwaysOnTop,
                borderColor: Color.Primary,
                backgroundColor: Color.Primary__a10,
                ...reminderContext.props.mode === Reminder.Mode.Alarm && {
                    borderColor: Color.Warning,
                    backgroundColor: Color.Warning__a10
                },
                ...reminderContext.props.mode === Reminder.Mode.Delete && {
                    borderColor: Color.Negative,
                    backgroundColor: Color.Negative__a10
                }
            },
            ...reminderContext.props.isToBeDeleted && {
                paddingTop: 0,
                paddingBottom: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                cursor: CursorType.Default,
                zIndex: Layer.Higher
            }
        }
    };
};

const TodoList__Reminder__Icon: IconStyle = function (iconProps)
{
    const reminderContext = Reminder.ContextHook.useReminderContext();

    const isCompleted = reminderContext.extra.isCompleted;
    const isSuspended = reminderContext.props.status === Reminder.Status.Suspended;
    const isToBeRescheduled = reminderContext.props.status === Reminder.Status.ToBeRescheduled;

    return {
        ...IconVariant.Default(iconProps),
        display: reminderContext.props.isToBeDeleted ? "none" : "flex",
        width: 30,
        height: 30,
        marginTop: 7,
        fontSize: 28,
        transform: [{scaleX: !isCompleted && isToBeRescheduled ? -1 : 1}],
        color: isSuspended
            ? Color.Neutral
            : isCompleted || isToBeRescheduled
                ? Color.Green
                : reminderContext.extra.isDue
                    ? Color.Gold
                    : reminderContext.extra.isOverdue
                        ? Color.Coral
                        : Color.Neutral
    };
};

const TodoList__Reminder__NameTagAndDeadlineContainer: ViewStyle = function (viewProps)
{
    const reminderContext = Reminder.ContextHook.useReminderContext();

    return {
        ...ViewVariant.Default(viewProps),
        display: reminderContext.props.isToBeDeleted ? "none" : "flex",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        rowGap: 4,
        paddingLeft: 5
    };
};

const TodoList__Reminder__NameInputField__Root: ViewStyle = function (viewProps)
{
    const inputFieldContext = InputFieldContextHook.useInputFieldContext();

    const inheritedStyle = InputFieldVariant.Default(inputFieldContext.props).Root(viewProps);

    return {
        ...inheritedStyle,
        width: "100%",
        height: 23,
        marginTop: -1,
        backgroundColor: Color.Transparent
    };
};

const TodoList__Reminder__NameInputField__TextBox: TextInputStyle = function (textInputProps)
{
    const reminderContext = Reminder.ContextHook.useReminderContext();
    const inputFieldContext = InputFieldContextHook.useInputFieldContext();

    const isHighlighted = Object.values(reminderContext.props.tags ?? {})
        .some(
            tag => tag.status === Reminder.TagStatus.Selected &&
                   tag.metadata?.has(Reminder.TagMetadata.HighlightTarget)
        );

    const inheritedStyle = InputFieldVariant.Default(inputFieldContext.props).TextBox(textInputProps);

    return {
        ...inheritedStyle,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        fontSize: 18,
        fontWeight: "bold",
        color: isHighlighted ? Color.Coral : Color.Neutral,
        animations: undefined
    };
};

const TodoList__Reminder__NameInputField__Placeholder: TextStyle = function (textProps)
{
    const inputFieldContext = InputFieldContextHook.useInputFieldContext();

    const inheritedStyle = InputFieldVariant.Default(inputFieldContext.props).Placeholder(textProps);

    return {
        ...inheritedStyle,
        display: inputFieldContext.props.value ? "none" : "flex",
        height: "100%",
        paddingLeft: 0,
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "italic",
        animations: undefined
    };
};

const TodoList__Reminder__NameInputField: InputFieldStyle = function (inputFieldProps)
{
    return {
        ...InputFieldVariant.Default(inputFieldProps),
        Root: TodoList__Reminder__NameInputField__Root,
        TextBox: TodoList__Reminder__NameInputField__TextBox,
        Placeholder: TodoList__Reminder__NameInputField__Placeholder
    };
};

const TodoList__Reminder__NameText: TextStyle = function (textProps)
{
    const reminderContext = Reminder.ContextHook.useReminderContext();

    const isHighlighted = Object.values(reminderContext.props.tags ?? {})
        .some(
            tag => tag.status === Reminder.TagStatus.Selected &&
                   tag.metadata?.has(Reminder.TagMetadata.HighlightTarget)
        );

    return {
        ...TextVariant.Default(textProps),
        alignItems: "flex-start",
        width: "100%",
        height: 23,
        marginTop: -1,
        fontSize: 18,
        fontWeight: "bold",
        color: isHighlighted ? Color.Coral : Color.Neutral
    };
};

const TodoList__Reminder__DueDateIcon: IconStyle = function (iconProps)
{
    const reminderContext = Reminder.ContextHook.useReminderContext();

    return {
        ...IconVariant.Default(iconProps),
        lineHeight: 17,
        paddingBottom: 1,
        marginRight: 5,
        fontSize: 14,
        color: reminderContext.extra.isCompleted ? Color.Green : Color.Neutral
    };
};

const TodoList__Reminder__DueDate: TextStyle = function (textProps)
{
    const reminderContext = Reminder.ContextHook.useReminderContext();

    return {
        ...TextVariant.Default(textProps),
        lineHeight: 18,
        marginRight: 10,
        fontSize: 14,
        fontWeight: "bold",
        color: reminderContext.extra.isCompleted ? Color.Green : Color.Neutral
    };
};

const TodoList__Reminder__DueDurationIcon: IconStyle = function (iconProps)
{
    const reminderContext = Reminder.ContextHook.useReminderContext();

    return {
        ...TodoList__Reminder__DueDateIcon(iconProps),
        fontSize: 15,
        transform: [{scaleX: reminderContext.extra.isCompleted || reminderContext.extra.isDue || reminderContext.extra.isOverdue ? 1 : -1}],
        color: reminderContext.extra.isDue
            ? Color.Gold
            : reminderContext.extra.isOverdue
                ? Color.Coral
                : Color.Neutral
    };
};

const TodoList__Reminder__DueDuration: TextStyle = function (textProps)
{
    const reminderContext = Reminder.ContextHook.useReminderContext();

    return {
        ...TodoList__Reminder__DueDate(textProps),
        color: reminderContext.extra.isDue
            ? Color.Gold
            : reminderContext.extra.isOverdue
                ? Color.Coral
                : Color.Neutral
    };
};

const TodoList__Reminder__TagSelector__Root: ViewStyle = function (viewProps)
{
    const dropdownMenuContext = DropdownMenuContextHook.useDropdownMenuContext();

    const inheritedStyle = DropdownMenuVariant.Default(dropdownMenuContext.props).Root(viewProps);

    return {
        ...inheritedStyle,
        flex: 1,
        height: 18,
        minHeight: undefined,
        marginHorizontal: 1,
        overflow: "hidden",
        cursor: CursorType.Default
    };
};

const TodoList__Reminder__TagSelector__SelectedItemContainer: PressableStyle = function ()
{
    return {
        display: "none"
    };
};

const TodoList__Reminder__TagSelector__Caret: ViewStyle = function ()
{
    return {
        display: "none"
    };
};

const TodoList__Reminder__TagSelector__Menu: ScrollViewStyle = function (scrollViewProps)
{
    const dropdownMenuContext = DropdownMenuContextHook.useDropdownMenuContext();

    const inheritedStyle = DropdownMenuVariant.Default(dropdownMenuContext.props).Menu(scrollViewProps);

    return {
        ...inheritedStyle,
        flexDirection: "row",
        top: 0,
        height: "100%",
        paddingVertical: 0,
        marginVertical: 0,
        backgroundColor: Color.Transparent
    };
};

const TodoList__Reminder__TagSelector__MenuItem__Root: PressableStyle = function (pressableProps, pressableState)
{
    const buttonContext = ButtonContextHook.useButtonContext();
    const menuItemKey = DropdownMenuContextHook.useMenuItemKeyContext();
    const dropdownMenuContext = DropdownMenuContextHook.useDropdownMenuContext();

    const menuItem = dropdownMenuContext.props.menuItems?.[menuItemKey];
    const isHighlighted = menuItem?.context?.includes(Reminder.TagMetadata.HighlightTarget);

    const inheritedStyle = DropdownMenuVariant.Default(dropdownMenuContext.props)
        .MenuItem(buttonContext.props)
        .Root(pressableProps, pressableState);

    return {
        ...inheritedStyle,
        flex: 1,
        width: "auto",
        height: "100%",
        minWidth: "auto",
        paddingVertical: 0,
        paddingHorizontal: 8,
        marginBottom: 0,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: isHighlighted ? Color.Coral : Color.Neutral,
        backgroundColor: menuItem?.status === MenuItemStatus.Selected || pressableState.pressed
            ? isHighlighted ? Color.Coral : Color.Neutral
            : pressableState.hovered
                ? isHighlighted ? Color.Coral__a10 : Color.Neutral__a10
                : Color.Transparent
    };
};

const TodoList__Reminder__TagSelector__MenuItem__Label: TextStyle = function (textProps)
{
    const buttonContext = ButtonContextHook.useButtonContext();
    const pressableContext = PressableContextHook.usePressableContext();
    const menuItemKey = DropdownMenuContextHook.useMenuItemKeyContext();
    const dropdownMenuContext = DropdownMenuContextHook.useDropdownMenuContext();

    const menuItem = dropdownMenuContext.props.menuItems?.[menuItemKey];
    const isHighlighted = menuItem?.context?.includes(Reminder.TagMetadata.HighlightTarget);

    const inheritedStyle = DropdownMenuVariant.Default(dropdownMenuContext.props)
        .MenuItem(buttonContext.props)
        .Label(textProps);

    return {
        ...inheritedStyle,
        paddingRight: 0,
        fontSize: 12,
        color: menuItem?.status === MenuItemStatus.Selected || pressableContext.state.pressed
            ? Color.Ambient
            : pressableContext.state.hovered
                ? Color.White
                : isHighlighted
                    ? Color.Coral
                    : Color.Neutral
    };
};

const TodoList__Reminder__TagSelector__MenuItem__Icon: IconStyle = function ()
{
    return {
        display: "none"
    };
};

const TodoList__Reminder__TagSelector__MenuItem: ButtonStyle = function (buttonProps)
{
    const dropdownMenuContext = DropdownMenuContextHook.useDropdownMenuContext();

    const inheritedStyle = DropdownMenuVariant.Default(dropdownMenuContext.props).MenuItem(buttonProps);

    return {
        ...inheritedStyle,
        Root: TodoList__Reminder__TagSelector__MenuItem__Root,
        Label: TodoList__Reminder__TagSelector__MenuItem__Label,
        Icon: TodoList__Reminder__TagSelector__MenuItem__Icon
    };
};

const TodoList__Reminder__TagSelector__Divider: ViewStyle = function ()
{
    return {
        display: "none"
    };
};

const TodoList__Reminder__TagSelector: DropdownMenuStyle = function (dropdownMenuProps)
{
    return {
        ...DropdownMenuVariant.Default(dropdownMenuProps),
        Root: TodoList__Reminder__TagSelector__Root,
        SelectedItemContainer: TodoList__Reminder__TagSelector__SelectedItemContainer,
        Caret: TodoList__Reminder__TagSelector__Caret,
        Menu: TodoList__Reminder__TagSelector__Menu,
        MenuItem: TodoList__Reminder__TagSelector__MenuItem,
        Divider: TodoList__Reminder__TagSelector__Divider
    };
};

const TodoList__Reminder__TagContainer: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        flexDirection: "row",
        justifyContent: "flex-start",
        height: 18,
        paddingLeft: 1,
        backgroundColor: Color.Transparent,
        overflow: "hidden"
    };
};

const TodoList__Reminder__Tag: TextStyle = function (textProps)
{
    const reminderContext = Reminder.ContextHook.useReminderContext();

    const isHighlighted = Object.values(reminderContext.props.tags ?? {})
        .some(
            tag => tag.status === Reminder.TagStatus.Selected &&
                   tag.metadata?.has(Reminder.TagMetadata.HighlightTarget)
        );

    return {
        ...TextVariant.Default(textProps),
        height: "100%",
        paddingHorizontal: 8,
        marginRight: 5,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: isHighlighted ? Color.Coral : Color.Neutral,
        fontSize: 12,
        color: Color.Background,
        backgroundColor: isHighlighted ? Color.Coral : Color.Neutral
    };
};

const TodoList__Reminder__ProgressStripes__Root: ViewStyle = function (viewProps)
{
    const progressStripesContext = ProgressStripesContextHook.useProgressStripesContext();

    const inheritedStyle = ProgressStripesVariant.Default(progressStripesContext.props).Root(viewProps);

    return {
        ...inheritedStyle,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: undefined,
        height: undefined,
        zIndex: Layer.Ambient
    };
};

const TodoList__Reminder__ProgressStripes__Stripe: ViewStyle = function (viewProps)
{
    const stripeIndex = ProgressStripesContextHook.useStripeIndexContext();
    const progressStripesContext = ProgressStripesContextHook.useProgressStripesContext();

    const inheritedStyle = ProgressStripesVariant.Default(progressStripesContext.props).Stripe(viewProps);

    return {
        ...inheritedStyle,
        width: 50,
        backgroundColor: stripeIndex % 2 === 0
            ? Color.White__a10
            : Color.Transparent
    };
};

const TodoList__Reminder__ProgressStripes: ProgressStripesStyle = function (progressStripesProps)
{
    return {
        ...ProgressStripesVariant.Default(progressStripesProps),
        Root: TodoList__Reminder__ProgressStripes__Root,
        Stripe: TodoList__Reminder__ProgressStripes__Stripe
    };
};

const TodoList__Reminder__ExpansionArea: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        flex: 1,
        flexBasis: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        rowGap: 8,
        columnGap: 8,
        borderTopWidth: 2,
        borderStyle: "dashed",
        borderColor: Color.Gray,
        paddingTop: 12,
        marginTop: 12,
        marginLeft: 35
    };
};

const TodoList__Reminder__RecurrencePatternInputField__Root: ViewStyle = function (viewProps)
{
    const inputFieldContext = InputFieldContextHook.useInputFieldContext();

    const inheritedStyle = InputFieldVariant.Default(inputFieldContext.props).Root(viewProps);

    return {
        ...inheritedStyle,
        backgroundColor: Color.Ambient
    };
};

const TodoList__Reminder__RecurrencePatternInputField__TextBox: TextInputStyle = function (textInputProps)
{
    const inputFieldContext = InputFieldContextHook.useInputFieldContext();

    const inheritedStyle = InputFieldVariant.Default(inputFieldContext.props).TextBox(textInputProps);

    return {
        ...inheritedStyle,
        paddingRight: 50,
        fontWeight: "bold",
        color: Color.Neutral
    };
};

const TodoList__Reminder__RecurrencePatternInputField: InputFieldStyle = function (inputFieldProps)
{
    return {
        ...InputFieldVariant.Default(inputFieldProps),
        Root: TodoList__Reminder__RecurrencePatternInputField__Root,
        TextBox: TodoList__Reminder__RecurrencePatternInputField__TextBox
    };
};

const TodoList__Reminder__NotificationIntervalNumericInputField__Root: ViewStyle = function (viewProps)
{
    const inputFieldContext = InputFieldContextHook.useInputFieldContext();
    const numericInputFieldContext = NumericInputFieldContextHook.useNumericInputFieldContext();

    const inheritedStyle = NumericInputFieldVariant.Default(numericInputFieldContext.props, numericInputFieldContext.state)
        (inputFieldContext.props)
        .Root(viewProps);

    return {
        ...inheritedStyle,
        flex: 1,
        backgroundColor: Color.Ambient
    };
};

const TodoList__Reminder__NotificationIntervalNumericInputField__TextBox: TextInputStyle = function (textInputProps)
{
    const inputFieldContext = InputFieldContextHook.useInputFieldContext();
    const numericInputFieldContext = NumericInputFieldContextHook.useNumericInputFieldContext();

    const inheritedStyle = NumericInputFieldVariant.Default(numericInputFieldContext.props, numericInputFieldContext.state)
        (inputFieldContext.props)
        .TextBox(textInputProps);

    return {
        ...inheritedStyle,
        paddingRight: 50,
        fontWeight: "bold"
    };
};

const TodoList__Reminder__NotificationIntervalNumericInputField__Placeholder: TextStyle = function (textProps)
{
    const inputFieldContext = InputFieldContextHook.useInputFieldContext();
    const numericInputFieldContext = NumericInputFieldContextHook.useNumericInputFieldContext();

    const inheritedStyle = NumericInputFieldVariant.Default(numericInputFieldContext.props, numericInputFieldContext.state)
        (inputFieldContext.props)
        .Placeholder(textProps);

    return {
        ...inheritedStyle
    };
};

const TodoList__Reminder__NotificationIntervalNumericInputField: NumericInputFieldStyle = function (numericInputFieldProps,
    numericInputFieldState)
{
    return inputFieldProps => ({
        ...NumericInputFieldVariant.Default(numericInputFieldProps, numericInputFieldState)(inputFieldProps),
        Root: TodoList__Reminder__NotificationIntervalNumericInputField__Root,
        TextBox: TodoList__Reminder__NotificationIntervalNumericInputField__TextBox,
        Placeholder: TodoList__Reminder__NotificationIntervalNumericInputField__Placeholder
    });
};

const TodoList__Reminder__SuspenseToggle__Root: ViewStyle = function (viewProps)
{
    const toggleContext = ToggleContextHook.useToggleContext();

    const inheritedStyle = ToggleVariant.Checkbox(toggleContext.props).Root(viewProps);

    return {
        ...inheritedStyle,
        position: "absolute",
        top: 12,
        right: 0
    };
};

const TodoList__Reminder__SuspenseToggle__Container: PressableStyle = function (pressableProps, pressableState)
{
    const toggleContext = ToggleContextHook.useToggleContext();

    const inheritedStyle = ToggleVariant.Checkbox(toggleContext.props).Container(pressableProps, pressableState);

    return {
        ...inheritedStyle,
        borderWidth: 0,
        width: 40,
        height: 40,
        backgroundColor: Color.Transparent
    };
};

const TodoList__Reminder__SuspenseToggle__Icon: IconStyle = function (iconProps)
{
    const toggleContext = ToggleContextHook.useToggleContext();
    const pressableContext = PressableContextHook.usePressableContext();

    const inheritedStyle = ToggleVariant.Checkbox(toggleContext.props).Icon(iconProps);

    return {
        ...inheritedStyle,
        display: "flex",
        fontSize: 24,
        color: toggleContext.props.status === Status.Checked || pressableContext.state.pressed
            ? Color.Warning
            : pressableContext.state.hovered
                ? Color.White
                : Color.Neutral
    };
};

const TodoList__Reminder__SuspenseToggle: ToggleStyle = function (toggleProps)
{
    return {
        ...ToggleVariant.Checkbox(toggleProps),
        Root: TodoList__Reminder__SuspenseToggle__Root,
        Container: TodoList__Reminder__SuspenseToggle__Container,
        Icon: TodoList__Reminder__SuspenseToggle__Icon
    };
};

const TodoList__Reminder__RescheduleToggle__Root: ViewStyle = function (viewProps)
{
    const reminderContext = Reminder.ContextHook.useReminderContext();

    const isEditMode = reminderContext.props.mode === Reminder.Mode.Edit;
    const isDraftMode = reminderContext.props.mode === Reminder.Mode.Draft;
    const isAlarmMode = reminderContext.props.mode === Reminder.Mode.Alarm;

    return {
        ...TodoList__Reminder__SuspenseToggle__Root(viewProps),
        top: isDraftMode || isEditMode ? 60 : undefined,
        right: isAlarmMode ? 128 : 0
    };
};

const TodoList__Reminder__RescheduleToggle__Icon: IconStyle = function (iconProps)
{
    const toggleContext = ToggleContextHook.useToggleContext();
    const reminderContext = Reminder.ContextHook.useReminderContext();
    const pressableContext = PressableContextHook.usePressableContext();

    return {
        ...TodoList__Reminder__SuspenseToggle__Icon(iconProps),
        transform: [{scaleX: reminderContext.props.originalData?.status === Reminder.Status.Completed ? -1 : 1}],
        color: toggleContext.props.status === Status.Checked || pressableContext.state.pressed
            ? Color.Green
            : pressableContext.state.hovered
                ? Color.White
                : Color.Neutral
    };
};

const TodoList__Reminder__RescheduleToggle: ToggleStyle = function (toggleProps)
{
    return {
        ...TodoList__Reminder__SuspenseToggle(toggleProps),
        Root: TodoList__Reminder__RescheduleToggle__Root,
        Icon: TodoList__Reminder__RescheduleToggle__Icon
    };
};

const TodoList__Reminder__RescheduleButton__Root: PressableStyle = function (pressableProps, pressableState)
{
    const buttonContext = ButtonContextHook.useButtonContext();
    const reminderContext = Reminder.ContextHook.useReminderContext();

    const isToBeRescheduled = reminderContext.props.status === Reminder.Status.ToBeRescheduled;

    const inheritedStyle = ButtonVariant.SolidRectangular(buttonContext.props).Root(pressableProps, pressableState);

    return {
        ...inheritedStyle,
        display: buttonContext.props.disabled ? "none" : "flex",
        height: 40,
        ...pressableState.pressed
            ? {
                borderColor: isToBeRescheduled ? Color.Green__b10 : Color.Neutral__b10,
                backgroundColor: isToBeRescheduled ? Color.Green__b10 : Color.Neutral__b10
            }
            : pressableState.hovered
                ? {
                    borderColor: isToBeRescheduled ? Color.Green__w25 : Color.Neutral__w25,
                    backgroundColor: isToBeRescheduled ? Color.Green__w25 : Color.Neutral__w25
                }
                : {
                    borderColor: isToBeRescheduled ? Color.Green : Color.Neutral,
                    backgroundColor: isToBeRescheduled ? Color.Green : Color.Neutral
                }
    };
};

const TodoList__Reminder__RescheduleButton__Label: TextStyle = function (textProps)
{
    const buttonContext = ButtonContextHook.useButtonContext();

    const inheritedStyle = ButtonVariant.SolidRectangular(buttonContext.props).Label(textProps);

    return {
        ...inheritedStyle,
        fontSize: 16,
        fontWeight: "bold"
    };
};

const TodoList__Reminder__RescheduleButton: ButtonStyle = function (buttonProps)
{
    return {
        ...ButtonVariant.SolidRectangular(buttonProps),
        Root: TodoList__Reminder__RescheduleButton__Root,
        Label: TodoList__Reminder__RescheduleButton__Label
    };
};

const TodoList__Reminder: Reminder.Style = function ()
{
    return {
        Root: TodoList__Reminder__Root,
        Icon: TodoList__Reminder__Icon,
        NameTagAndDeadlineContainer: TodoList__Reminder__NameTagAndDeadlineContainer,
        NameInputField: TodoList__Reminder__NameInputField,
        NameText: TodoList__Reminder__NameText,
        DueDateIcon: TodoList__Reminder__DueDateIcon,
        DueDate: TodoList__Reminder__DueDate,
        DueDurationIcon: TodoList__Reminder__DueDurationIcon,
        DueDuration: TodoList__Reminder__DueDuration,
        TagSelector: TodoList__Reminder__TagSelector,
        TagContainer: TodoList__Reminder__TagContainer,
        Tag: TodoList__Reminder__Tag,
        ExpansionArea: TodoList__Reminder__ExpansionArea,
        RecurrencePatternInputField: TodoList__Reminder__RecurrencePatternInputField,
        NotificationIntervalNumericInputField: TodoList__Reminder__NotificationIntervalNumericInputField,
        SuspenseToggle: TodoList__Reminder__SuspenseToggle,
        RescheduleToggle: TodoList__Reminder__RescheduleToggle,
        RescheduleButton: TodoList__Reminder__RescheduleButton,
        ProgressStripes: TodoList__Reminder__ProgressStripes
    };
};

export const Default: TodoListStyle = function ()
{
    return {
        DataList: TodoList__DataList,
        Reminder: TodoList__Reminder
    };
};
