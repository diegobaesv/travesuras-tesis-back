"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
//import path from 'path';
//var bodyParser = require('body-parser');
var cors = require('cors');
const app = express_1.default();
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
app.use(morgan_1.default('dev')); // Sirve para identificar las rutas, incluso si hay un error
app.use(cors());
app.use(express_1.default.json());
// Add APIs
app.use('/api', routes_1.default);
// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// Export express instance
exports.default = app;
