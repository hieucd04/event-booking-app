export type State = {
    events: { [id: string]: Event; };
}

type Event = {
    readonly title: string;
    readonly description: string;
    readonly location: string;
    readonly date: Date;
}
