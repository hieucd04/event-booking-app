import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "../redux-state";

export const eventsSlice = createSlice({
    name: "events",
    initialState: defaultState.events,
    reducers: {}
});
