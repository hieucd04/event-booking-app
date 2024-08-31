import { eventsSlice } from "./events";

export const ReduxAction = {
    Events: eventsSlice.actions
};

export const ReduxSliceReducer = {
    Events: eventsSlice.reducer
};
