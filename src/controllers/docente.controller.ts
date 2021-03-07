
import Docente from '../models/Docente';
import { Request, Response } from 'express';

export async function getDocentes(req: Request, res: Response){
    try{
        const docentes = await Docente.findAll();

        res.json({
            data: docentes
        });
    }catch(e){
        console.log(e);
    }
}