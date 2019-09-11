import { BaseRouter } from './base.router';
import { eventsController } from '../controllers';
import express, { Router } from 'express';

// export const eventsRouter = new BaseRouter(eventsController);

const router = express.Router();
router.get('/', eventsController.get);
router.get('/counts', eventsController.getCounts);
router.get('/:id', eventsController.getById);
router.post('/', eventsController.post);
router.put('/:id', eventsController.put);
router.delete('/:id', eventsController.remove);

export const eventsRouter = {
    router
};
