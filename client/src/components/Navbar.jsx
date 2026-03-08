import { Link } from "react-router-dom"

function Navbar() {

return (

<div className="bg-white shadow ">

<div className="max-w-7xl mx-auto flex justify-between items-center p-4 w-100%">

<h1 className="text-xl font-bold text-blue-600">
LocalServices
</h1>

<div className="flex gap-6">

<Link to="/">Services</Link>
<Link to="/provider">Become Provider</Link>
<Link to="/login">Login</Link>
<Link to="/signup">Signup</Link>

</div>

</div>

</div>

)

}

export default Navbar

