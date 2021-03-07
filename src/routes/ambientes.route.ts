import { Router } from 'express';
import { getAmbientes } from 'src/controllers/ambiente.controller';
const router = Router();

router.route('/')
    .get(getAmbientes);



export default router;