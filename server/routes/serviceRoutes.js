import express from "express"
import Service from "../models/Service.js"

const router = express.Router()

// CREATE SERVICE
router.post("/", async (req,res)=>{
 try{

  const service = new Service(req.body)
  await service.save()

  res.json(service)

 }catch(err){
  res.status(500).json({message:err.message})
 }
})

// GET SERVICES
router.get("/", async (req,res)=>{
 try{

  const services = await Service.find()
  res.json(services)

 }catch(err){
  res.status(500).json({message:err.message})
 }
})

export default router