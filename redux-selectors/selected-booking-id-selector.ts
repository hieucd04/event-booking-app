import { createSelector } from "@reduxjs/toolkit";
import { State } from "../redux-state";

export const createSelectedBookingIdSelector = () => createSelector(
    [
        (reduxState: State) => reduxState
    ],
    reduxState => reduxState.selectedBookingId
);
