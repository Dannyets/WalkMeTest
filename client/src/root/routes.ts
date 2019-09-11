import { Temp } from '../app';
import { IRoute } from '../common';

export const routes: IRoute[] = [
    {
        url: '/',
        component: Temp,
        exact: true,
        navigation: {
            show: true,
            displayName: 'Temp'
        }
    },
];