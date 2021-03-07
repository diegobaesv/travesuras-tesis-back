import { Router } from "express";
import { getDocentes } from "src/controllers/docente.controller";

const router = Router();

router.route('/')
    .get(getDocentes);

export default router;