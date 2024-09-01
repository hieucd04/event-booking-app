export type State = {
    events: { [id: string]: Event; };
    bookings: { [id: string]: Booking; };
    selectedEventId?: string;
    selectedBookingId?: string;
    activeScreenName: "view-all-events" | "event-details" | "booking-form" | "view-all-bookings" | "booking-details";
}

type Event = {
    readonly title: string;
    readonly description: string;
    readonly location: string;
    readonly date: Date;
}

type Booking = {
    readonly eventId: string;
    readonly attendeeName: string;
    readonly attendeeEmail: string;
    readonly ticketType: string;
}
