import React from 'react'
import { useSelector } from 'react-redux'
import { getEventCounts } from '../Events.selectors';
import { useEventCountFetcher } from '../Events.resource';
import { EventType } from '../Event.model';

export const EventCaptureDetails: React.FC = ({ }) => {
    const counts = useSelector(getEventCounts);
    const { total, ...restOfCounts } = counts;
    useEventCountFetcher();

    return (
        <div>
            <div>Total: {total}</div>
            <div>Click: {restOfCounts[EventType.Click]}</div>
            <div>Movment: {restOfCounts[EventType.Move]}</div>            
        </div>
    );
}