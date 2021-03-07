"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("src/controllers/usuario.controller");
const router = express_1.Router();
router.route('/')
    .get(usuario_controller_1.getUsuarios);
exports.default = router;
