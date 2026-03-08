
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../api/api"

function Signup(){

const navigate = useNavigate()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSignup = async(e)=>{

e.preventDefault()

try{

const res = await API.post("/auth/signup",{
name,
email,
password,
})

console.log(res.data)

alert("Signup Successful")

// signup ke baad login page open
navigate("/login")

}catch(err){

console.log(err)

alert("Signup failed")

}

}

return(

<div className="min-h-screen flex items-center justify-center bg-gray-100">

<div className="bg-white shadow-xl rounded-xl p-10 w-[380px]">

<h2 className="text-3xl font-bold mb-6 text-center">
Create Account
</h2>

<form onSubmit={handleSignup} className="flex flex-col gap-4">

<input
type="text"
placeholder="Full Name"
className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<input
type="email"
placeholder="Email"
className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button
type="submit"
className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
>
Signup
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

Already have an account?

<span
onClick={()=>navigate("/login")}
className="text-blue-600 cursor-pointer ml-1"
>
Login
</span>

</p>

</div>

</div>

)

}

export default Signup


