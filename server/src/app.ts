import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import expressWinston from 'express-winston';
import { logUtils } from './utils';
import { Route } from './models';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(expressWinston.logger(logUtils.createLoggerOptions()));

routes.forEach(({ router, route }: Route) => app.use(route, router));

app.use(expressWinston.errorLogger(logUtils.createLoggerOptions()));

export {
    app
};
