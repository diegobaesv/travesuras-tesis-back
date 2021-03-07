
import Alumno from "../models/Alumno";
import { Request, Response } from 'express';
import { sequelize } from "src/config/database";
import Apoderado from "../models/Apoderado";
import DistribucionAmbiente from "../models/DistribucionAmbiente";
import Nivel from "../models/Nivel";
import Aula from "@entities/Aula";
const { Op } = require("sequelize");


export async function getAlumnosByAmbienteId(req: Request, res: Response){
    try{
        const { id_distribucion_ambiente } = req.params;
        const alumnos=await Alumno.findAll({
            include: {
                model: DistribucionAmbiente,
                where: {
                    id_distribucion_ambiente
                },
                include: [
                    {
                        model: Nivel,
                        as: 'nivel'
                    },
                    {
                        model: Aula,
                        as: 'aula'
                    }
                ]
            }
            
        });

        res.json({
            data:alumnos
        })
    }catch(e){
        console.log(e);
    }
}

export async function getAlumnos(req: Request, res: Response) {
    try {
        const alumnos = await Alumno.findAll({
            include: {
                model: DistribucionAmbiente,
                include: [
                    {
                        model: Nivel,
                        as: 'nivel'
                    },
                    {
                        model: Aula,
                        as: 'aula'
                    }
                ]
            }
        }
        );

        res.json({
            data: alumnos
        });
    } catch (e) {
        console.log(e);
    }
}

export async function buscarPorNombre(req: Request, res: Response) {
    try {
        const { busqueda } = req.params;

        const alumnos = await Alumno.findAll    ({
            attributes: {
                include: [[
                    sequelize.fn(
                        "concat", sequelize.col("alumnos.nombres"),' ', sequelize.col("alumnos.apellido_paterno"), ' ', sequelize.col("alumnos.apellido_materno") 
                        ),'nombre_completo' ]]
            }
                ,
                include: [
                    {
                        model: Apoderado,
                        as: 'apoderado'
                    }
                ],
            where: sequelize.where(
                sequelize.fn(
                    "concat", sequelize.col("alumnos.nombres"), ' ',sequelize.col("alumnos.apellido_paterno"), ' ',sequelize.col("alumnos.apellido_materno") 
                    ), 
            {  [Op.like]: `%${busqueda.toUpperCase()}%` }
            )
        });
        res.json({
            data: alumnos
        });
    } catch (e) {
        console.log(e);
    }
}