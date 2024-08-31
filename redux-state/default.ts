import { State } from "./types";

export const defaultState: State = {
    events: {
        "event_1": {
            title: "Test Title",
            description: "Test Description",
            location: "Test Location",
            date: new Date()
        },
        "event_2": {
            title: "Test Title",
            description: "Test Description",
            location: "Test Location",
            date: new Date()
        }
    }
};
