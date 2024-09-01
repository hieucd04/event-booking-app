import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultState } from "../redux-state";

export const selectedBookingIdSlice = createSlice({
    name: "selected-booking-id",
    initialState: defaultState.selectedBookingId,
    reducers: {
        SetSelectedBookingId(_, action: PayloadAction<string | null>)
        {
            const selectedBookingId = action.payload;
            return selectedBookingId;
        }
    }
});
