import { eventsSlice } from "./events";
import { bookingsSlice } from "./bookings";
import { selectedEventIdSlice } from "./selected-event-id";
import { selectedBookingIdSlice } from "./selected-booking-id";
import { activeScreenNameSlice } from "./active-screen-name";

export const ReduxAction = {
    Events: eventsSlice.actions,
    Bookings: bookingsSlice.actions,
    SelectedEventId: selectedEventIdSlice.actions,
    SelectedBookingId: selectedBookingIdSlice.actions,
    ActiveScreenName: activeScreenNameSlice.actions
};

export const ReduxSliceReducer = {
    Events: eventsSlice.reducer,
    Bookings: bookingsSlice.reducer,
    SelectedEventId: selectedEventIdSlice.reducer,
    SelectedBookingId: selectedBookingIdSlice.reducer,
    ActiveScreenName: activeScreenNameSlice.reducer
};
