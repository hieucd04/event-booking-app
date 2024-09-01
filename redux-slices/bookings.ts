import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Booking, defaultState } from "../redux-state";

export const bookingsSlice = createSlice({
    name: "bookings",
    initialState: defaultState.bookings,
    reducers: {
        AddDraftBooking(state, action: PayloadAction<Booking>)
        {
            const booking = action.payload;
            state[""] = booking;
        },

        AddConfirmedBooking(state, action: PayloadAction<Booking>)
        {
            const booking = action.payload;
            state[Date.now()] = booking;
        },

        CancelBooking(state, action: PayloadAction<string>)
        {
            const bookingId = action.payload;
            delete state[bookingId];
        },

        ChangeDraftBookingData(state, action: PayloadAction<Partial<Booking>>)
        {
            const newBookingData = action.payload;
            state[""] = {
                ...state[""],
                ...newBookingData
            };
        }
    }
});
