import { combineReducers } from 'redux';
import { eventsReducer } from '../../app/events/Events.reducer'

export const rootReducer = combineReducers({
  events: eventsReducer
});