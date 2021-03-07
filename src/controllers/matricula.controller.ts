import Matricula from '../models/Matricula';
import DistribucionAmbiente from '../models/DistribucionAmbiente';
import { Request, Response } from 'express';
import Alumno from '@entities/Alumno';

export async function createMatricula(req: Request, res: Response) {

    try {
        const { id_alumno, id_distribucion_ambiente, fecha_matricula, id_usuario } = req.body;

        let newMatricula = await Matricula.create({
            id_alumno, id_distribucion_ambiente, fecha_matricula, id_usuario
        });

        res.json({
            message: 'Creado satisfactorio',
            newMatricula
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Algo ha salido mal',
            data: {}
        });
    }

}

export async function getEstadoMatriculaByAlumno(req: Request, res: Response) {
    try {
        const { id_alumno } = req.params;

        const matriculas = await DistribucionAmbiente.findAll({
            include: [
                {
                    model: Alumno,
                    where: {
                        id_alumno
                    }
                }
            ]
        });
        res.json({
            estado: Object.keys(matriculas).length >= 1
        });
    } catch (e) {
        console.log(e);
    }
}