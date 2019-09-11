import { InMemoryRepository } from './in-memory.repository';
import { IEvent, IEventRepository, EventType } from '../models';

export class EventRepository extends InMemoryRepository<IEvent> implements IEventRepository {
    constructor(name: string, dataFilePath: string) {
        super(name, dataFilePath);
    }

    public getCounts = async () => {
        const counts = {
            [EventType.Click]: 0,
            [EventType.Move]: 0
        };
        
        console.log('counts before:', counts);

        this.data.forEach(i => {
            counts[i.type]++;
        });

        console.log('counts after:', counts);

        return {
            total: this.data.length,
            ...counts
        };
    }
}

const eventsRepository = new EventRepository('events', `${__dirname}/../data/events.json`);

export {
    eventsRepository
};
