import { createSelector } from "@reduxjs/toolkit";
import { State } from "../redux-state";

export const createEventsSelector = () => createSelector(
    [
        (reduxState: State) => reduxState.events
    ],
    events => ({...events})
);
