import { EventsState } from './Events.store';

export const getEventState = (state: any) => state.events as EventsState;
export const getEventCounts = (state: any) => getEventState(state).counts;