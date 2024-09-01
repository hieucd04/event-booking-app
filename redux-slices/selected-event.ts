import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "../redux-state";

export const selectedEventSlice = createSlice({
    name: "selected-event",
    initialState: defaultState.selectedEventId,
    reducers: {}
});
