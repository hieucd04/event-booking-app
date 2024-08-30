import {DataListDisplayPanelTheme} from "@miniskylab/antimatter-data-list";
import {EMPTY_STRING, withValidation} from "@miniskylab/antimatter-framework";
import {Sb} from "@miniskylab/antimatter-storybook";
import {DefaultIconSet} from "@miniskylab/antimatter-typography";
import {useArgs} from "@storybook/preview-api";
import type {Meta, StoryObj} from "@storybook/react";
import React, {useRef} from "react";
import {Reminder} from "../components";
import {TodoList} from "../main";
import {TodoListProps, type TodoListRef} from "../models";
import * as Variant from "../variants";
import {TestData} from "./test-data";

const TodoListWithValidation = withValidation(TodoList, TodoListProps);
export default {
    component: TodoList,
    title: "Components/Todo List",
    render: (args: Required<TodoListProps>) =>
    {
        type BusySettings = Pick<TodoListProps, "selectedReminder" | "addNewReminderButton" | "saveReminderButton" |
            "deleteReminderButton" | "cancelButton" | "customButton">;

        type UnbusySettings = Pick<TodoListProps, "addNewReminderButton" | "saveReminderButton" | "deleteReminderButton" | "cancelButton" |
            "customButton">;

        const busySettings: BusySettings = {
            selectedReminder: {...args.selectedReminder, showProgressStripes: true},
            addNewReminderButton: {...args.addNewReminderButton, disabled: true},
            saveReminderButton: {...args.saveReminderButton, disabled: true},
            deleteReminderButton: {...args.deleteReminderButton, disabled: true},
            cancelButton: {...args.cancelButton, disabled: true},
            customButton: {...args.customButton, disabled: true}
        };
        const unbusySettings: UnbusySettings = {
            addNewReminderButton: {...args.addNewReminderButton, disabled: false},
            saveReminderButton: {...args.saveReminderButton, disabled: false},
            deleteReminderButton: {...args.deleteReminderButton, disabled: false},
            cancelButton: {...args.cancelButton, disabled: false},
            customButton: {...args.customButton, disabled: false}
        };

        const [, setArgs] = useArgs<TodoListProps>();
        const todoListRef = useRef<TodoListRef>();

        return (
            <TodoListWithValidation
                {...args}
                ref={todoListRef}
                key={Sb.useNewKeyIfAnyOfTheseChanges([args.style])}
                dismissAlarmButton={{
                    ...args.dismissAlarmButton,
                    icon: DefaultIconSet.NoSound,
                    text: "Dismiss",
                    onPress: () => { setArgs({mode: Reminder.Mode.ReadOnly, alarmedReminderIds: []}); }
                }}
                addNewReminderButton={{
                    ...args.addNewReminderButton,
                    icon: DefaultIconSet.PlusCircle,
                    text: "Add New",
                    onPress: () =>
                    {
                        setArgs({
                            mode: Reminder.Mode.Draft,
                            selectedReminder: {
                                id: EMPTY_STRING,
                                data: {
                                    name: EMPTY_STRING,
                                    recurrencePattern: EMPTY_STRING,
                                    notificationInterval: 1,
                                    tags: TestData.Tags,
                                    status: Reminder.Status.Unscheduled
                                }
                            }
                        });
                    }
                }}
                saveReminderButton={{
                    ...args.saveReminderButton,
                    icon: DefaultIconSet.FloppyDisk,
                    text: "Save",
                    onPress: async () =>
                    {
                        setArgs({
                            ...busySettings,
                            mode: Reminder.Mode.ReadOnly,
                            displayPanel: {
                                icon: DefaultIconSet.Gear,
                                message: "Saving Reminder",
                                theme: DataListDisplayPanelTheme.Highlighted,
                                isIconAnimationPlaying: true,
                                isVisible: true
                            }
                        });

                        await new Promise(resolve => { setTimeout(resolve, 2000); });
                        if (args.selectedReminder.id === EMPTY_STRING)
                        {
                            const newlyAddedReminderId = `${Date.now()}`;
                            todoListRef.current?.flashHighlightReminders([newlyAddedReminderId]);

                            TestData.Reminders[newlyAddedReminderId] = {
                                name: args.selectedReminder.data.name,
                                recurrencePattern: args.selectedReminder.data.recurrencePattern,
                                notificationInterval: args.selectedReminder.data.notificationInterval,
                                tags: args.selectedReminder.data.tags,
                                status: args.selectedReminder.data.status,
                                dueDate: args.selectedReminder.data.dueDate,
                                createdDate: new Date()
                            };
                        }
                        else
                        {
                            todoListRef.current?.flashHighlightReminders([args.selectedReminder.id]);
                            TestData.Reminders[args.selectedReminder.id] = {
                                ...args.reminders[args.selectedReminder.id],
                                name: args.selectedReminder.data.name,
                                recurrencePattern: args.selectedReminder.data.recurrencePattern,
                                notificationInterval: args.selectedReminder.data.notificationInterval,
                                tags: args.selectedReminder.data.tags,
                                status: args.selectedReminder.data.status,
                                dueDate: args.selectedReminder.data.dueDate,
                                modifiedDate: new Date()
                            };
                        }

                        setArgs({
                            ...unbusySettings,
                            selectedReminder: undefined,
                            reminders: {...TestData.Reminders},
                            displayPanel: {
                                icon: DefaultIconSet.CheckMark,
                                theme: DataListDisplayPanelTheme.Positive,
                                message: "Saved Successfully"
                            }
                        });
                    }
                }}
                deleteReminderButton={{
                    ...args.deleteReminderButton,
                    icon: DefaultIconSet.TrashCan,
                    text: "Delete",
                    onPress: async () =>
                    {
                        setArgs({
                            ...busySettings,
                            displayPanel: {
                                icon: DefaultIconSet.Gear,
                                message: "Deleting Reminder",
                                theme: DataListDisplayPanelTheme.Negative,
                                isIconAnimationPlaying: true,
                                isVisible: true
                            }
                        });

                        await new Promise(resolve => { setTimeout(resolve, 2000); });
                        delete TestData.Reminders[args.selectedReminder.id];

                        setArgs({
                            ...unbusySettings,
                            mode: Reminder.Mode.ReadOnly,
                            reminders: {...TestData.Reminders},
                            selectedReminder: undefined,
                            displayPanel: {
                                icon: DefaultIconSet.CheckMark,
                                theme: DataListDisplayPanelTheme.Positive,
                                message: "Deleted Successfully"
                            }
                        });
                    }
                }}
                cancelButton={{
                    ...args.cancelButton,
                    icon: DefaultIconSet.XMarkInsideCircle,
                    text: "Cancel",
                    onPress: () => { setArgs({mode: Reminder.Mode.ReadOnly, selectedReminder: undefined}); }
                }}
                customButton={{
                    ...args.customButton,
                    icon: DefaultIconSet.Group,
                    text: "Lorem Ipsum: 99",
                    onPress: () => { alert("Lorem Ipsum"); }
                }}
                onSwitchMode={newMode =>
                {
                    setArgs({
                        mode: newMode,
                        selectedReminder: {
                            id: args.selectedReminder.id,
                            data: {
                                name: args.reminders[args.selectedReminder.id].name,
                                recurrencePattern: args.reminders[args.selectedReminder.id].recurrencePattern,
                                notificationInterval: args.reminders[args.selectedReminder.id].notificationInterval,
                                tags: args.reminders[args.selectedReminder.id].tags,
                                status: args.reminders[args.selectedReminder.id].status,
                                dueDate: args.reminders[args.selectedReminder.id].dueDate,
                                modifiedDate: args.reminders[args.selectedReminder.id].modifiedDate,
                                createdDate: args.reminders[args.selectedReminder.id].createdDate
                            }
                        }
                    });
                }}
                onChangeReminder={newReminderData =>
                {
                    setArgs({
                        selectedReminder: {
                            id: args.selectedReminder.id,
                            data: {
                                ...args.selectedReminder.data,
                                ...newReminderData
                            }
                        }
                    });
                }}
                onSelectReminder={reminderId =>
                {
                    setArgs({
                        mode: Reminder.Mode.Edit,
                        selectedReminder: {
                            id: reminderId,
                            data: {
                                name: args.reminders[reminderId].name,
                                recurrencePattern: args.reminders[reminderId].recurrencePattern,
                                notificationInterval: args.reminders[reminderId].notificationInterval,
                                tags: args.reminders[reminderId].tags,
                                status: args.reminders[reminderId].status,
                                dueDate: args.reminders[reminderId].dueDate,
                                modifiedDate: args.reminders[reminderId].modifiedDate,
                                createdDate: args.reminders[reminderId].createdDate
                            }
                        }
                    });
                }}
            />
        );
    }
} satisfies Meta<typeof TodoList>;
type Story = StoryObj<typeof TodoList>;

export const Playground: Story = {
    argTypes: {
        style: Sb.styleSelector(Variant),
        maxSelectedTagCount: Sb.number(0),
        reminders: Sb.locked,
        selectedReminder: Sb.locked,
        alarmedReminderIds: Sb.locked,
        reminderRecurrencePatternPlaceholder: Sb.text(),
        reminderNotificationIntervalPlaceholder: Sb.text(),
        mode: Sb.locked,
        displayPanel: Sb.locked,
        dismissAlarmButton: Sb.locked,
        addNewReminderButton: Sb.locked,
        saveReminderButton: Sb.locked,
        deleteReminderButton: Sb.locked,
        cancelButton: Sb.locked,
        customButton: Sb.locked,
        onChangeReminder: Sb.locked,
        onSelectReminder: Sb.locked,
        onSwitchMode: Sb.locked
    },
    args: {
        style: Sb.getVariantName(Variant, Variant.Default),
        maxSelectedTagCount: 2,
        reminderRecurrencePatternPlaceholder: "Recurrence Pattern",
        reminderNotificationIntervalPlaceholder: "Notification Interval (Hours)",
        mode: Reminder.Mode.Alarm,
        alarmedReminderIds: ["1", "2", "6"],
        reminders: {...TestData.Reminders}
    }
};
