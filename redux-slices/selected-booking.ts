import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "../redux-state";

export const selectedBookingSlice = createSlice({
    name: "selected-booking",
    initialState: defaultState.selectedBookingId,
    reducers: {}
});
