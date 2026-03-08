
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import CustomerDashboard from "./pages/CustomerDashboard"
import ProviderDashboard from "./pages/ProviderDashboard"
import AdminDashboard from "./pages/AdminDashboard"

import ProtectedRoute from "./components/ProtectedRoute"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/provider" element={<ProviderDashboard/>}/>
<Route path="/admin" element={<AdminDashboard/>}/>

<Route 
path="/dashboard"
element={
<ProtectedRoute role="customer">
<CustomerDashboard/>
</ProtectedRoute>
}
/>

{/* <Route 
path="/provider"
element={
<ProtectedRoute role="provider">
<ProviderDashboard/>
</ProtectedRoute>
}
/> */}
{/* <Route 
path="/admin"
element={
<ProtectedRoute role="admin">
<AdminDashboard/>
</ProtectedRoute>
}
/> */}

</Routes>

<Footer/>

</BrowserRouter>

)

}

export default App