import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {

  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetchProviders();
  }, []);

  // Fetch Pending Providers
  const fetchProviders = async () => {
    try {

      const res = await axios.get(
        "http://localhost:5000/api/admin/pending-providers"
      );

      setProviders(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  // Approve Provider
  const approveProvider = async (id) => {

    await axios.put(
      `http://localhost:5000/api/admin/approve-provider/${id}`
    );

    fetchProviders();

  };

  // Reject Provider
  const rejectProvider = async (id) => {

    await axios.put(
      `http://localhost:5000/api/admin/reject-provider/${id}`
    );

    fetchProviders();

  };


  return (

    <div className="bg-gray-100 min-h-screen p-8 flex justify-center">

      <div className="w-full max-w-5xl">

        {/* Header */}

        <div className="bg-blue-600 text-white px-6 py-3 rounded-lg flex justify-between items-center mb-6">

          <h1 className="text-lg font-semibold">
            Admin Dashboard
          </h1>

          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm">
            Service Owner
          </span>

        </div>


        {/* Stats Section */}

        <div className="grid grid-cols-3 gap-6 mb-6">

          <div className="bg-white p-5 rounded-lg shadow text-center">

            <p className="text-gray-500">
              Total Bookings
            </p>

            <h2 className="text-2xl font-bold text-blue-600">
              50+
            </h2>

          </div>

          <div className="bg-white p-5 rounded-lg shadow text-center">

            <p className="text-gray-500">
              Listed Services
            </p>

            <h2 className="text-2xl font-bold text-blue-600">
              220
            </h2>

          </div>

          <div className="bg-white p-5 rounded-lg shadow text-center">

            <p className="text-gray-500">
              Total Providers
            </p>

            <h2 className="text-2xl font-bold text-orange-500">
              414
            </h2>

          </div>

        </div>


        {/* Pending Providers */}

        <div className="bg-white rounded-lg shadow p-5 mb-6">

          <div className="flex justify-between mb-4">

            <h2 className="font-semibold">
              Pending Providers
            </h2>

            <button className="text-blue-600 text-sm">
              New Bookings
            </button>

          </div>


          {providers.length === 0 ? (

            <p className="text-gray-400">
              No pending providers
            </p>

          ) : (

            providers.map((item) => (

              <div
                key={item._id}
                className="flex justify-between items-center border-b py-3"
              >

                <div className="flex items-center gap-3">

                  <img
                    src={item.img || "https://i.pravatar.cc/40"}
                    className="w-10 h-10 rounded-full"
                  />

                  <div>

                    <p className="font-semibold">
                      {item.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      {item.service}
                    </p>

                  </div>

                </div>


                <div className="flex gap-2">

                  <button
                    onClick={() => approveProvider(item._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => rejectProvider(item._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Reject
                  </button>

                </div>

              </div>

            ))

          )}

        </div>


        {/* Latest Reviews */}

        <div className="bg-white rounded-lg shadow p-5">

          <h2 className="font-semibold mb-4">
            Latest Reviews
          </h2>

          <div className="flex justify-between items-center">

            <div className="flex gap-3 items-center">

              <img
                src="https://i.pravatar.cc/40"
                className="w-10 h-10 rounded-full"
              />

              <div>

                <p className="font-semibold">
                  Anita Roy
                </p>

                <p className="text-gray-500 text-sm">
                  Great Service!
                </p>

              </div>

            </div>


            <div className="text-yellow-400 text-lg">
              ★★★★★
            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default AdminDashboard;