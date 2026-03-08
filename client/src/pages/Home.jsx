import { useEffect, useState } from "react"
import API from "../api/api"
import ServiceCard from "../components/ServiceCard"

function Home(){

const [services,setServices] = useState([])


useEffect(()=>{

API.get("/services")
.then(res=>{
setServices(res.data)
})
.catch(err=>{
console.log("API Error:", err)
})

},[])

return(

<div className="bg-gray-100 min-h-screen">

{/* HERO SECTION */}

<div
className="h-[500px] flex flex-col justify-center px-16 bg-cover bg-center relative"
style={{
backgroundImage:"url('https://www.christiesrealestate.com/resizer/v2/ETVMIMN3VZBTDLU47INVHNQVB4.jpg?auth=8c137ad6175b308d0eb57acaf18cd20ab25c595cbf8e8f09877c1383ad280486')"
}}
>

{/* overlay */}

<div className="absolute inset-0 bg-black/40"></div>

<div className="relative z-10 max-w-xl text-white ml-20">

<h1 className="text-5xl font-bold leading-tight">
Book Trusted Local Services in Your City
</h1>

<p className="mt-4 text-lg text-gray-200">
Choose verified professionals for home services
</p>

{/* SEARCH BAR */}

<div className="flex mt-8 bg-white rounded-lg overflow-hidden shadow-lg w-[450px]">

<input
type="text"
placeholder="Enter your city"
className="flex-1 p-4 text-black outline-none"
/>

<select className="p-4 text-black border-l">

<option>Kolkata</option>
<option>Delhi</option>
<option>Mumbai</option>

</select>

</div>

</div>

</div>


{/* POPULAR SERVICES */}

<div className="px-16 py-12 ml-20">

<h2 className="text-3xl font-bold mb-8">
Popular Services
</h2>

<div className="flex flex-wrap gap-8">

{services.length > 0 ? (

services.map(service => (
<ServiceCard key={service._id} service={service}/>
))

) : (

<p>No services available</p>

)}

</div>

</div>


{/* HOW IT WORKS */}

<div className="px-16 pb-16 ml-20">

<h2 className="text-3xl font-bold mb-8">
How It Works
</h2>

<div className="flex gap-8 flex-wrap">

<div className="bg-white p-8 rounded-xl shadow w-[280px]">

<h3 className="font-bold text-xl">
1. Select Service
</h3>

<p className="text-gray-500 mt-3">
Choose service like plumbing, cleaning etc
</p>

</div>

<div className="bg-white p-8 rounded-xl shadow w-[280px]">

<h3 className="font-bold text-xl">
2. Book Time
</h3>

<p className="text-gray-500 mt-3">
Select date and time for the service
</p>

</div>
 <div className="bg-white p-8 rounded-xl shadow w-[280px]">

<h3 className="font-bold text-xl">
1. Select Service
</h3>

<p className="text-gray-500 mt-3">
Choose service like plumbing, cleaning etc
</p>

</div>

<div className="bg-white p-8 rounded-xl shadow w-[280px]">

<h3 className="font-bold text-xl">
2. Book Time
</h3>

<p className="text-gray-500 mt-3">
Select date and time for the service
</p>

</div>


</div>

</div>

</div>

)

}

export default Home



