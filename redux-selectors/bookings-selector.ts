import { createSelector } from "@reduxjs/toolkit";
import { State } from "../redux-state";

export const createBookingsSelector = () => createSelector(
    [
        (reduxState: State) => reduxState.bookings
    ],
    bookings => ({...bookings})
);
