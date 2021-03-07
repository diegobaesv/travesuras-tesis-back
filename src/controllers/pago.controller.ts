import Pago from '../models/Pago';
import { Request, Response } from 'express';
import Usuario from '../models/Usuario';

export async function createPago(req: Request, res: Response) {

    try {
        const { concepto, metodo, monto, fecha_pago, id_alumno, id_usuario } = req.body;

        let newPago = await Pago.create({
            concepto, metodo, monto, fecha_pago, id_alumno, id_usuario
        });

        res.json({
            message: 'Creado satisfactorio',
            newPago
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Algo ha salido mal'
        });
    }
   
}

export async function getPagosByAlumno(req: Request, res: Response) {
    try {
        const { id_alumno } = req.params;
        const pagos = await Pago.findAll({
            include: [
                {
                    model: Usuario,
                    as: 'usuario'
                }
            ],
            where: {
                id_alumno
            },
            order: [
                [ 'id_pago','DESC']
            ]

        });
        res.json({
            data: pagos
        });
    } catch (e) {
        console.log(e);
    }

}
