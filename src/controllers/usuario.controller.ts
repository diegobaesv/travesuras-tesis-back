
import Usuario from '../models/Usuario';
import { Request, Response } from 'express';

export async function getUsuarios(req: Request, res: Response){
    try{
        const usuarios = await Usuario.findAll();

        res.json({
            data: usuarios
        });
    }catch(e){
        console.log(e);
    }
}


export async function login(req: Request, res: Response){
    try{

        const { username, clave} = req.body;
        const usuario = await Usuario.findOne({ where: { username }});

        if(usuario===null) throw {message: `Usuario no registrado`}  

        const result = usuario.clave == clave;

        if(!result){
            throw { message: "email y/o password son inválidas" };
        }

        res.json(usuario);



    }catch(e){
        res.status(500).send(e)
    }
}