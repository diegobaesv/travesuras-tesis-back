import express from 'express';
import morgan from 'morgan';
import BaseRouter from './routes';
//import path from 'path';
//var bodyParser = require('body-parser');

var cors = require('cors');

const app = express();

// -----------------------------------------------------------------------
//                              ROUTES IMPORTS
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
//                              CONFIGURACIÓN
// -----------------------------------------------------------------------
app.set('port', process.env.PORT || 4000);

// -----------------------------------------------------------------------
//                                MIDDLEWARES
// -----------------------------------------------------------------------
app.use(morgan('dev')); // Sirve para identificar las rutas, incluso si hay un error
app.use(cors());
app.use(express.json());

// Add APIs
app.use('/api', BaseRouter);

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars


// Export express instance
export default app;
