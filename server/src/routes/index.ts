export * from './base.router';

import { Route } from '../models';
import { eventsRouter } from './events.router';

const routes: Route[] = [
    {
        route: '/api/events',
        router: eventsRouter.router,
    },
];

export {
    routes
};
