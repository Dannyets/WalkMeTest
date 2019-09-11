import { GET_EVENT_COUNTS, ADD_EVENT } from './Events.actionTypes';
import { IEvent } from './Event.model';

export const getEventCountsSuccess = (counts: any) => ({
    type: GET_EVENT_COUNTS,
    payload: { 
        counts
    }
});

export const addEvent = (event: IEvent) => ({
    type: ADD_EVENT,
    payload: {
        event
    }
})