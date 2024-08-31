import { Action, configureStore, combineReducers } from "@reduxjs/toolkit";
import { ReduxSliceReducer } from "../redux-slices";
import { defaultState, State } from "../redux-state";

const store = configureStore<State, Action>({
    reducer: (state: State, action: Action): State => combineReducers({
        events: ReduxSliceReducer.Events,
    })(state, action),
    preloadedState: defaultState,
    devTools: true
});

export { store };
