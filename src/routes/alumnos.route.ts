import { Router } from 'express';
import { buscarPorNombre, getAlumnos, getAlumnosByAmbienteId } from 'src/controllers/alumno.controller';

const router = Router();

router.route('/')
    .get(getAlumnos);

router.route('/buscar/nombres/:busqueda')
    .get(buscarPorNombre);


router.route('/ambiente/:id_distribucion_ambiente')
    .get(getAlumnosByAmbienteId);


export default router;