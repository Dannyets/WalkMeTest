import { EventType } from "./Event.model";

export interface EventsState {
    counts: {
        total: number,
        [EventType.Move]: number,
        [EventType.Click]: number
    }
};

export const eventsDefaultState: EventsState = {
    counts: {
        total: 0,
        [EventType.Move]: 0,
        [EventType.Click]: 0
    }
};