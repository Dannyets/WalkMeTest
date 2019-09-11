import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { ConfigContext } from '../../root'
import { useDispatch } from 'react-redux';
import { getEventCountsSuccess, addEvent } from './Events.actions';
import { IEvent } from './Event.model';

const defaultUrl = 'http://localhost';

export const getUrl = (baseUrl: string) => {
    const url = baseUrl || defaultUrl;
    const templatesApiUrl = `${url}/api/events`;
    return templatesApiUrl;
};

export const useEventCountFetcher = () => {
    const dispatch = useDispatch();
    const context = useContext(ConfigContext);
    const { baseUrl } = context;
    const url = getUrl(baseUrl);

    useEffect(() => {
        const getEventCounts = async () => {
            let events;
            const countUrl = `${url}/counts`;

            try {
                const response = await axios.get(countUrl);
                const { data } = response;
                events = data;
            } catch (error) {
                console.log(error);
            }

            dispatch(getEventCountsSuccess(events));
        }

        getEventCounts();

        return () => {};
    }, []);
}

export const useEventsCreator = () => {
    const dispatch = useDispatch();
    const context = useContext(ConfigContext);
    const { baseUrl } = context;
    const url = getUrl(baseUrl);

    const addEventToServer = async (event: IEvent) => {
        let updatedEvent;
        
        try {
            const response = await axios.post(url, event);
            const { data } = response;
            updatedEvent = data;
            dispatch(addEvent(updatedEvent));
        } catch (error) {
            console.log(error);
        }
    }

    return { addEventToServer };
}