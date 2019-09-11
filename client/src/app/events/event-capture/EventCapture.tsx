import React from 'react'
import { EventCaptureContainer, Capturer } from './EventCapture.styles';
import { IEvent, EventType } from '../Event.model';
import { useEventsCreator } from '../Events.resource';

export const EventCapture: React.FC = ({ }) => {
    const { addEventToServer } = useEventsCreator();

    const onClickHandler = async (e: any) => {
        const target = e.target;
        const { x, y } = target;

        const event: IEvent = {
            x,
            y,
            type: EventType.Click,
            id: '',
            userId: ''
        };

        await addEventToServer(event);
    }

    const onMoveHandler = async (e: any) => {
        const target = e.target;
        const { x, y } = target;

        const event: IEvent = {
            x,
            y,
            type: EventType.Move,
            id: '',
            userId: ''
        };

        await addEventToServer(event);
    }

    return (
        <EventCaptureContainer>
            <Capturer onClick={onClickHandler} 
                      onMouseMove={onMoveHandler}/>
        </EventCaptureContainer>
    );
}