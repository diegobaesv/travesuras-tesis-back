"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ambiente_controller_1 = require("src/controllers/ambiente.controller");
const router = express_1.Router();
router.route('/')
    .get(ambiente_controller_1.getAmbientes);
exports.default = router;
