export type State = {
    events: { [id: string]: Event; };
    bookings: { [id: string]: Booking; };
    selectedEventId: string | null;
    selectedBookingId: string | null;
    activeScreenName: "event" | "booking";
}

type Event = {
    readonly title: string;
    readonly description: string;
    readonly location: string;
    readonly date: string;
}

type Booking = {
    readonly eventId: string;
    readonly attendeeName: string;
    readonly attendeeEmail: string;
    readonly ticketType: string;
}
