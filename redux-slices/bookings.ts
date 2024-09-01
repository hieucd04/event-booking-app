import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "../redux-state";

export const bookingsSlice = createSlice({
    name: "bookings",
    initialState: defaultState.bookings,
    reducers: {}
});
