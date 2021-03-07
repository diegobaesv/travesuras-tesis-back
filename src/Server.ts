import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import express from 'express';
import 'express-async-errors';

import BaseRouter from './routes';

const app = express();


var cors = require('cors');

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


// Show routes called in console during development
app.use(morgan('dev'));

// Add APIs
app.use('/api', BaseRouter);

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars


// Export express instance
export default app;
