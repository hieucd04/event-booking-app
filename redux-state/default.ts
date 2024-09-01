import { State, TicketType } from "./types";

export const defaultState: State = {
    events: {
        "event_1": {
            title: "Dota 2 - The International 2024",
            description: "The International 2024, is the upcoming 13th edition of the The International, the annual Dota 2 world championship esports tournament hosted by Valve, the game's developer. The tournament is set to take place in Copenhagen, Denmark, in Royal Arena.",
            location: "Denmark",
            date: new Date(2024, 10, 15).toISOString(),
            availableTicketTypes: [TicketType.GeneralAdmission, TicketType.VIP]
        },
        "event_2": {
            title: "Black Myth: Wukong - Released",
            description: "Black Myth: Wukong is a 2024 action role-playing game developed and published by Game Science. The game is inspired by the classical Chinese novel Journey to the West and follows an anthropomorphic monkey based on the character of Sun Wukong from the novel.",
            location: "China",
            date: new Date(2024, 10, 18).toISOString(),
            availableTicketTypes: [TicketType.GeneralAdmission]
        },
        "event_3": {
            title: "The UEFA Championship 2024",
            description: "The UEFA European Football Championship, less formally the European Championship and informally the Euro or Euros, is the primary association football tournament organised by the Union of European Football Associations.",
            location: "Germany",
            date: new Date(2024, 8, 14).toISOString(),
            availableTicketTypes: [TicketType.GeneralAdmission, TicketType.VIP]
        },
        "event_4": {
            title: "Copa América 2024",
            description: "The CONMEBOL Copa América, often simply called the Copa America, is the top men's quadrennial football tournament contested among national teams from South America. It is the oldest still-running continental football competition. The competition determines the champions of South America.",
            location: "United States",
            date: new Date(2024, 8, 14).toISOString(),
            availableTicketTypes: [TicketType.GeneralAdmission, TicketType.VIP]
        }
    },
    bookings: {},
    selectedEventId: null,
    selectedBookingId: null,
    activeScreenName: "event"
};
