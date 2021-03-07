"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const docente_controller_1 = require("src/controllers/docente.controller");
const router = express_1.Router();
router.route('/')
    .get(docente_controller_1.getDocentes);
exports.default = router;
