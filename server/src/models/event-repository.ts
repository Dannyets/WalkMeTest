import { Repository } from '.';
import { EventType, IEvent } from './event';

export interface IEventRepository extends Repository<IEvent> {
    getCounts: () => Promise<{
        total: number;
        [EventType.Click]: number;
        [EventType.Move]: number;
    }>;
}
