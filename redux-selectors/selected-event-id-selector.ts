import { createSelector } from "@reduxjs/toolkit";
import { State } from "../redux-state";

export const createSelectedEventIdSelector = () => createSelector(
    [
        (reduxState: State) => reduxState
    ],
    reduxState => reduxState.selectedEventId
);
