import { Request, Response } from 'express';

import DistribucionAmbiente from "../models/DistribucionAmbiente";
import Docente from "../models/Docente";
import Aula from "../models/Aula";
import Nivel from "../models/Nivel";


export async function getAmbientes(req: Request, res: Response) {
    try {
        const ambientes = await DistribucionAmbiente.findAll({
            attributes: { exclude: ['id_docente','id_aula','id_nivel']},
            include : [
                {
                    model: Docente,
                    as: 'docente'
                },
                {
                    model: Aula,
                    as: 'aula'
                },
                {
                    model: Nivel,
                    as: 'nivel'
                }
            ]
        });
        res.json({
            data: ambientes
        });
    } catch (e) {
        console.log(e);
    }
    
}

