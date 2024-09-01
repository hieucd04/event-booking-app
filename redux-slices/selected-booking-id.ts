import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "../redux-state";

export const selectedBookingIdSlice = createSlice({
    name: "selected-booking-id",
    initialState: defaultState.selectedBookingId,
    reducers: {}
});
