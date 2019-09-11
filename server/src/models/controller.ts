import { Request, Response, NextFunction } from 'express';

export interface Controller {
    get: (req: Request, res: Response, next: NextFunction) => void;
    getById: (req: Request, res: Response, next: NextFunction) => void;
    post: (req: Request, res: Response, next: NextFunction) => void;
    put: (req: Request, res: Response, next: NextFunction) => void;
    remove: (req: Request, res: Response, next: NextFunction) => void;
    tryFindById: (req: Request, res: Response, next: NextFunction) => void;
};
