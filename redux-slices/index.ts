import { eventsSlice } from "./events";
import { bookingsSlice } from "./bookings";
import { selectedEventSlice } from "./selected-event";
import { selectedBookingSlice } from "./selected-booking";
import { activeScreenNameSlice } from "./active-screen-name";

export const ReduxAction = {
    Events: eventsSlice.actions,
    Bookings: bookingsSlice.actions,
    SelectedEvent: selectedEventSlice.actions,
    SelectedBooking: selectedBookingSlice.actions,
    ActiveScreenName: activeScreenNameSlice.actions
};

export const ReduxSliceReducer = {
    Events: eventsSlice.reducer,
    Bookings: bookingsSlice.reducer,
    SelectedEvent: selectedEventSlice.reducer,
    SelectedBooking: selectedBookingSlice.reducer,
    ActiveScreenName: activeScreenNameSlice.reducer
};
