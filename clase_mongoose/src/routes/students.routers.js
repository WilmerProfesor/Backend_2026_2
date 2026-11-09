import { Router } from "express";
import { studentModel } from "../models/studentModel.js";

const router= Router();

router.get("/", async(req, res)=>{
    try {
        const result= await studentModel.find();         
        res.status(201).send({status:"success", data: result});        
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post("/", async(req, res)=>{
    const newStudent = req.body;
    console.log(newStudent);
    try {
        const result= await studentModel.create(newStudent);
        res.status(201).send(result);        
    } catch (error) {
        res.status(400).send({message:"Error al crear el estudiante", error: error});
    }
})

router.put("/:id", async(req, res)=>{
    const idStudent=req.params.id;
    const newStudent=req.body;
    try {
        const result= await studentModel.updateOne({_id:idStudent}, newStudent);
        res.status(201).send(result);        
    } catch (error) {
        res.status(400).send({message:"Error al crear el estudiante", error: error});
    }
})


export default router;