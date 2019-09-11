import React from 'react'
import { EventCapture } from './event-capture';
import { EventContainer } from './Events.styles';
import { EventCaptureDetails } from './event-capture-details';

export const Temp: React.FC = ({ }) => {
    return (
        <div className="App">
            <div className="App-header">
                <EventContainer>
                    <EventCapture/>
                    <EventCaptureDetails/>
                </EventContainer>
            </div>
        </div>
    );
}