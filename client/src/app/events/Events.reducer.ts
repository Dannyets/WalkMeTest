import { GET_EVENT_COUNTS, ADD_EVENT } from "./Events.actionTypes";
import { eventsDefaultState } from "./Events.store";
import { EventType } from "./Event.model";

export const eventsReducer = (state = eventsDefaultState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case GET_EVENT_COUNTS: {
            const { counts } = payload;

            return {
                ...state,
                counts: {
                    ...state.counts,
                    ...counts,
                },
            };
        }

        case ADD_EVENT: {
            const { event } = payload;
            const { counts } = state;
            const { total } = counts;
            const eventType = event.type as EventType;

            let currentTotal = total || 0;
            let currentCount = counts[eventType] || 0;

            return {
                ...state,
                counts: {
                    ...counts,
                    total: ++currentTotal,
                    [event.type]: ++currentCount
                }
            };
        }

        default:
            return state;
    }
}