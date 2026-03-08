import { useState } from "react";

function CustomerDashboard() {

  const [services] = useState([
    {
      id: 1,
      name: "House Cleaning",
      price: "Starts ₹500",
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300"
    },
    {
      id: 2,
      name: "AC Repair",
      price: "Starts ₹800",
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=300"
    }
  ]);

  const [bookings] = useState([
    {
      id: 1,
      service: "Plumbing",
      location: "Saltlake",
      status: "Completed"
    },
    {
      id: 2,
      service: "House Cleaning",
      location: "New Town",
      status: "Upcoming"
    }
  ]);

  return (

    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6">

        <h2 className="text-xl font-bold mb-8">
          Dashboard
        </h2>

        <ul className="space-y-4 text-gray-600">
          <li className="font-semibold text-blue-600">Dashboard</li>
          <li>My Bookings</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>

      </div>


      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* Welcome Section */}
        <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center mb-8">

          <div>

            <h2 className="text-xl font-bold">
              Welcome, John!
            </h2>

            <p className="text-gray-500 text-sm">
              Book trusted services near you
            </p>

            <input
              type="text"
              placeholder="Enter your city"
              className="mt-3 border p-2 rounded w-64"
            />

          </div>

          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
            className="w-40 rounded"
          />

        </div>


        {/* Popular Services */}
        <h2 className="text-xl font-bold mb-4">
          Popular Services
        </h2>

        <div className="flex gap-6 flex-wrap mb-8">

          {services.map((service) => (

            <div
              key={service.id}
              className="bg-white p-4 rounded-xl shadow w-[260px]"
            >

              <img
                src={service.img}
                className="rounded-lg h-32 w-full object-cover"
              />

              <h3 className="font-semibold mt-3">
                {service.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {service.price}
              </p>

              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
                Book Now
              </button>

            </div>

          ))}

        </div>


        {/* Booking History */}
        <h2 className="text-xl font-bold mb-4">
          Booking History
        </h2>

        <div className="bg-white rounded-xl shadow p-4">

          {bookings.map((booking) => (

            <div
              key={booking.id}
              className="flex justify-between items-center border-b py-3"
            >

              <div>

                <p className="font-semibold">
                  {booking.service}
                </p>

                <p className="text-sm text-gray-500">
                  {booking.location}
                </p>

              </div>

              <span
                className={`px-3 py-1 rounded text-sm ${
                  booking.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {booking.status}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default CustomerDashboard;