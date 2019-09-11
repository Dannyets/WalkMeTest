import { IEvent, IEventRepository } from '../models';
import { eventsRepository } from '../repositories';
import { logFactory } from '../factories';
import { BaseController } from './base.controller';
import { Logger } from 'winston';
import { Request, NextFunction, Response } from 'express-serve-static-core';

class EventsController extends BaseController<IEvent> {
    constructor(repository: IEventRepository,
                logger: Logger) {
        super(repository, logger);
    }

    public getCounts = (req: Request, res: Response, next: NextFunction) => {
        this.logger.info(`Getting counts for events.`);

        const eventRepository = this.repository as IEventRepository;
        
        eventRepository
            .getCounts()
            .then((data) => {
                res.send(data);
            })
            .catch(next);
    }
}

const logger = logFactory.createLogger('events-controller');

const eventsController = new EventsController(eventsRepository, logger);

export {
    eventsController
};
