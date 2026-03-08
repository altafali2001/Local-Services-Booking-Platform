export default function BookingCard({service,status,date}){

return(

<div className="bg-white shadow rounded p-4 flex justify-between items-center">

<div>

<h3 className="font-semibold">{service}</h3>

<p className="text-gray-500">{date}</p>

</div>

<span className="text-blue-600 font-medium">
{status}
</span>

</div>

)

}