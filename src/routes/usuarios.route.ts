import { Router } from 'express';
import { getUsuarios } from 'src/controllers/usuario.controller';
const router = Router();

router.route('/')
    .get(getUsuarios);


export default router;