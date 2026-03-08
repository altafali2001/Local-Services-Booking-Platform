
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// SIGNUP
export const signup = async (req,res)=>{
try{

const {name,email,password, role} = req.body

const userExist = await User.findOne({email})

if(userExist){
return res.status(400).json({message:"User already exists"})
}

const hashedPassword = await bcrypt.hash(password,10)

const user = await User.create({
name,
email,
password:hashedPassword,
role
})

res.status(201).json({
message:"Signup successful"
})

}catch(error){

console.log(error)
res.status(500).json(error)

}
}


// LOGIN
export const login = async (req,res)=>{
try{

const {email,password} = req.body

const user = await User.findOne({email})

if(!user){
return res.status(404).json({message:"User not found"})
}

const validPassword = await bcrypt.compare(password,user.password)

if(!validPassword){
return res.status(400).json({message:"Wrong password"})
}

const token = jwt.sign(
{ id:user._id, role:user.role },
process.env.JWT_SECRET,
{expiresIn:"1d"}
)

res.json({
token,
user:{
name:user.name,
email:user.email,
role:user.role
}
})

}catch(error){

console.log(error)
res.status(500).json(error)

}
}