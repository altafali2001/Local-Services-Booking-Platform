
// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import API from "../api/api"

// function Login(){

// const navigate = useNavigate()

// const [email,setEmail] = useState("")
// const [password,setPassword] = useState("")


// const handleLogin = async(e)=>{

// e.preventDefault()

// try{

// const res = await API.post("/auth/login",{
// email,
// password
// })

// const {token,user} = res.data

// localStorage.setItem("token",token)
// localStorage.setItem("role",user.role)

// alert("Login Success")

// // ROLE BASED DASHBOARD
// if(user.role === "admin"){
// navigate("/admin")
// }
// else if(user.role === "provider"){
// navigate("/provider")
// }
// else{
// navigate("/dashboard")
// }

// }catch(err){

// console.log(err)
// alert("Login failed")

// }

// }
// return(

// <div className="min-h-screen flex items-center justify-center bg-gray-100">

// <div className="bg-white shadow-xl rounded-xl p-10 w-[380px]">

// <h2 className="text-3xl font-bold mb-6 text-center">
// Login
// </h2>

// <form onSubmit={handleLogin} className="flex flex-col gap-4">

// <input
// type="email"
// placeholder="Email"
// className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
// onChange={(e)=>setEmail(e.target.value)}
// />

// <input
// type="password"
// placeholder="Password"
// className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
// onChange={(e)=>setPassword(e.target.value)}
// />

// <button
// className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
// >
// Login
// </button>

// </form>

// {/* Divider */}

// <div className="flex items-center my-5">

// <div className="flex-1 border"></div>
// <p className="px-3 text-gray-500 text-sm">OR</p>
// <div className="flex-1 border"></div>

// </div>

// {/* GOOGLE LOGIN */}

// <button className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-100">

// <img
// src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
// className="w-5"
// alt="google"
// />

// Continue with Google

// </button>

// <p className="text-sm text-center mt-5 text-gray-500">

// Don't have an account?  

// <span 
// onClick={()=>navigate("/signup")}
// className="text-blue-600 cursor-pointer ml-1"
// >
// Sign up
// </span>

// </p>

// </div>

// </div>

// )

// }

// export default Login


import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../api/api"

function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = async(e)=>{

e.preventDefault()

try{

const res = await API.post("/auth/login",{
email,
password
})

const { token, user } = res.data

// token save
localStorage.setItem("token", token)

// role ko lowercase me save karo (important)
const role = user.role.toLowerCase()
localStorage.setItem("role", role)

alert("Login Success")

// ROLE BASED REDIRECT
switch(role){

case "admin":
navigate("/admin")
break

case "provider":
navigate("/provider")
break

case "customer":
navigate("/dashboard")
break

default:
navigate("/")
}

}catch(err){

console.log(err)
alert("Login failed")

}

}

return(

<div className="min-h-screen flex items-center justify-center bg-gray-100">

<div className="bg-white shadow-xl rounded-xl p-10 w-[380px]">

<h2 className="text-3xl font-bold mb-6 text-center">
Login
</h2>

<form onSubmit={handleLogin} className="flex flex-col gap-4">

<input
type="email"
placeholder="Email"
className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button
className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
>
Login
</button>

</form>

<div className="flex items-center my-5">

<div className="flex-1 border"></div>
<p className="px-3 text-gray-500 text-sm">OR</p>
<div className="flex-1 border"></div>

</div>

<button className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-100">

<img
src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
className="w-5"
alt="google"
/>

Continue with Google

</button>

<p className="text-sm text-center mt-5 text-gray-500">

Don't have an account?

<span 
onClick={()=>navigate("/signup")}
className="text-blue-600 cursor-pointer ml-1"
>
Sign up
</span>

</p>

</div>

</div>

)

}

export default Login 