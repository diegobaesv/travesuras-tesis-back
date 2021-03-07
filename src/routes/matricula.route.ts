import { Router } from 'express';
import { createMatricula, getEstadoMatriculaByAlumno } from 'src/controllers/matricula.controller';
const router = Router();

router.route('/')
    .post(createMatricula);

router.route('/alumno/:id_alumno/estado')
    .get(getEstadoMatriculaByAlumno);

export default router;