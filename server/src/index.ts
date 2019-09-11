import dotenv from 'dotenv';

dotenv.config();

import { app } from './app';

const port = 3002;

app.set('port', port);

const server = app.listen(port, () => {
    console.log(
        'App is running at http://localhost:%d in %s mode',
        app.get('port'),
        app.get('env')
    );

    console.log('Press CTRL + C to exit.');
});

export {
    server
};