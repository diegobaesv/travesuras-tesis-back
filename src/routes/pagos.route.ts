import { Router } from 'express';
import { createPago, getPagosByAlumno } from '../controllers/pago.controller';
const router = Router();

router.route('/')
    .post(createPago);

    router.route('/alumno/:id_alumno')
    .get(getPagosByAlumno);

export default router;