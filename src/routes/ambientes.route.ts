import { Router } from 'express';
import { getAmbientes } from '../controllers/ambiente.controller';
const router = Router();

router.route('/')
    .get(getAmbientes);



export default router;