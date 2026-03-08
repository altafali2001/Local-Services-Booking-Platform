import { Link } from "react-router-dom"

export default function Sidebar(){

return(

<div className="w-64 bg-white shadow h-screen p-6 flex flex-col gap-6">

<h1 className="text-xl font-bold text-blue-600">
LocalServices
</h1>

<Link to="/customer">Customer Dashboard</Link>

<Link to="/provider">Provider Dashboard</Link>

<Link to="/admin">Admin Dashboard</Link>

<Link to="/">Home</Link>

</div>

)

}