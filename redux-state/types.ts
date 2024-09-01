export type State = {
    events: { [id: string]: Event; };
    bookings: { [id: string]: Booking; };
    selectedEventId: string | null;
    selectedBookingId: string | null;
    activeScreenName: "event" | "booking";
}

export enum TicketType {
    GeneralAdmission = "General Admission",
    VIP = "VIP"
}

export type Booking = {
    readonly eventId: string;
    readonly attendeeName: string;
    readonly attendeeEmail: string;
    readonly ticketType: TicketType;
}

type Event = {
    readonly title: string;
    readonly description: string;
    readonly location: string;
    readonly date: string;
    readonly availableTicketTypes: TicketType[];
}
