import { State, TicketType } from "./types";

export const defaultState: State = {
    events: {
        "event_1": {
            title: "Dota 2 The International 2024",
            description: "The International 2024, is the upcoming 13th edition of the The International, the annual Dota 2 world championship esports tournament hosted by Valve, the game's developer. The tournament is set to take place in Copenhagen, Denmark, in Royal Arena.",
            location: "Royal Arena, Copenhagen, Denmark",
            date: new Date(2024, 10, 15).toISOString(),
            availableTicketTypes: [TicketType.GeneralAdmission, TicketType.VIP]
        },
        "event_2": {
            title: "Black Myth: Wukong Game Launch",
            description: "Black Myth: Wukong is a 2024 action role-playing game developed and published by Game Science. The game is inspired by the classical Chinese novel Journey to the West and follows an anthropomorphic monkey based on the character of Sun Wukong from the novel.",
            location: "China",
            date: new Date(2024, 10, 18).toISOString(),
            availableTicketTypes: [TicketType.GeneralAdmission]
        }
    },
    bookings: {},
    selectedEventId: null,
    selectedBookingId: null,
    activeScreenName: "event"
};
