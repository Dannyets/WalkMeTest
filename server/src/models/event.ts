export interface IEvent {
    id: string;
    x: number;
    y: number;
    type: EventType;
    userId: string;
}

export enum EventType {
    Click,
    Move,
}
