import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultState } from "../redux-state";

export const selectedEventIdSlice = createSlice({
    name: "selected-event-id",
    initialState: defaultState.selectedEventId,
    reducers: {
        SetSelectedEventId(_, action: PayloadAction<string | null>)
        {
            const selectedEventId = action.payload;
            return selectedEventId;
        }
    }
});
