import { State, TicketType } from "./types";

export const defaultState: State = {
    events: {
        "event_1": {
            title: "Dota 2 - The International 2024",
            description: "The International 2024, is the upcoming 13th edition of the The International, the annual Dota 2 world championship esports tournament hosted by Valve, the game's developer. The tournament is set to take place in Copenhagen, Denmark, in Royal Arena.",
            location: "Denmark",
            date: new Date(2024, 8, 5).toISOString(),
            availableTicketTypes: [TicketType.GeneralAdmission, TicketType.VIP]
        },
        "event_2": {
            title: "Black Myth: Wukong - Released",
            description: "Black Myth: Wukong is a 2024 action role-playing game developed and published by Game Science. The game is inspired by the classical Chinese novel Journey to the West and follows an anthropomorphic monkey based on the character of Sun Wukong from the novel.",
            location: "China",
            date: new Date(2024, 7, 20).toISOString(),
            availableTicketTypes: [TicketType.GeneralAdmission]
        },
        "event_3": {
            title: "The UEFA Championship 2024",
            description: "The UEFA European Football Championship, less formally the European Championship and informally the Euro or Euros, is the primary association football tournament organised by the Union of European Football Associations.",
            location: "Germany",
            date: new Date(2024, 5, 14).toISOString(),
            availableTicketTypes: [TicketType.GeneralAdmission, TicketType.VIP]
        },
        "event_4": {
            title: "Copa América 2024",
            description: "The CONMEBOL Copa América, often simply called the Copa America, is the top men's quadrennial football tournament contested among national teams from South America. It is the oldest still-running continental football competition. The competition determines the champions of South America.",
            location: "United States",
            date: new Date(2024, 5, 20).toISOString(),
            availableTicketTypes: [TicketType.GeneralAdmission, TicketType.VIP]
        },
        "event_5": {
            title: "Olympic Games Paris 2024",
            description: "The 2024 Summer Olympics, officially the Games of the XXXIII Olympiad and branded as Paris 2024, were an international multi-sport event that occurred from 26 July to 11 August 2024 in France, with several events started from 24 July.",
            location: "Paris",
            date: new Date(2024, 6, 26).toISOString(),
            availableTicketTypes: [TicketType.GeneralAdmission, TicketType.VIP]
        },
        "event_6": {
            title: "Wimbledon Championships 2024",
            description: "The 2024 Wimbledon Championships was a Grand Slam tennis tournament that took place at the All England Lawn Tennis and Croquet Club in Wimbledon, London, England, comprising singles, doubles and mixed doubles play. Junior, wheelchair and Invitational tournaments were also scheduled.",
            location: "England",
            date: new Date(2024, 6, 1).toISOString(),
            availableTicketTypes: [TicketType.GeneralAdmission, TicketType.VIP]
        }
    },
    bookings: {},
    selectedEventId: null,
    selectedBookingId: null,
    activeScreenName: "event"
};
