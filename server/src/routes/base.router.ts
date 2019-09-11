import express, { Router } from 'express';
import { Controller } from '../models';

export class BaseRouter {
    public router: Router;

    constructor(private controller: Controller) {
        this.router = express.Router();

        this.router.get('/', this.controller.get);

        this.router.get('/:id', this.controller.getById);

        this.router.post('/', this.controller.post);

        this.router.put('/:id', this.controller.put);

        this.router.delete('/:id', this.controller.remove);
    }
}