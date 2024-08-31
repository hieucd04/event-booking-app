import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "../redux-state";

export const eventsSlice = createSlice({
    name: "music-player",
    initialState: defaultState.events,
    reducers: {}
});
