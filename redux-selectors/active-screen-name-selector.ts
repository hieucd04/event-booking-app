import { createSelector } from "@reduxjs/toolkit";
import { State } from "../redux-state";

export const createActiveScreenNameSelector = () => createSelector(
    [
        (reduxState: State) => reduxState
    ],
    reduxState => reduxState.activeScreenName
);
