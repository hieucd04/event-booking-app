import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "../redux-state";

export const activeScreenNameSlice = createSlice({
    name: "active-screen-name",
    initialState: defaultState.activeScreenName,
    reducers: {}
});
