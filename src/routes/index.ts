import { Router } from 'express';

import alumnosRouter from './alumnos.route';
import ambientesRouter from './ambientes.route';
import matriculaRouter from './matricula.route';
import pagosRouter from './pagos.route';
import docentesRouter from './docentes.route';
import usuariosRouter from './usuarios.route';
import { login } from 'src/controllers/usuario.controller';
// Init router and path
const router = Router();

// Add sub-routes
router.use('/alumnos', alumnosRouter);
router.use('/ambientes', ambientesRouter);
router.use('/matricula', matriculaRouter);
router.use('/pagos', pagosRouter);
router.use('/docentes', docentesRouter);
router.use('/usuarios', usuariosRouter);


router.route('/login')
    .post(login);


// Export the base-router
export default router;
