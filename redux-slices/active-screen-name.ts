import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultState } from "../redux-state";

export const activeScreenNameSlice = createSlice({
    name: "active-screen-name",
    initialState: defaultState.activeScreenName,
    reducers: {
        SetActiveScreenName(_, action: PayloadAction<"event" | "booking">)
        {
            const activeScreenName = action.payload;
            return activeScreenName;
        }
    }
});
