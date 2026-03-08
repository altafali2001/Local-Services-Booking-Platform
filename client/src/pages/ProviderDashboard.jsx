import { useState } from "react";

function ProviderDashboard() {

  const [newRequests, setNewRequests] = useState([
    {
      id: 1,
      name: "Rita Sharma",
      service: "Plumbing",
      location: "Saltlake",
      time: "20 Jan 2022 • 10:00 AM",
      img: "https://i.pravatar.cc/40"
    }
  ]);

  const [acceptedJobs, setAcceptedJobs] = useState([]);
  const [completedJobs, setCompletedJobs] = useState([]);
  const [pastBookings, setPastBookings] = useState([]);

  // Accept Job
  const acceptJob = (job) => {

    setAcceptedJobs([...acceptedJobs, job]);

    setNewRequests(newRequests.filter((item) => item.id !== job.id));

    // 5 sec baad completed
    setTimeout(() => {

      setCompletedJobs((prev) => [...prev, job]);

      setAcceptedJobs((prev) =>
        prev.filter((item) => item.id !== job.id)
      );

      // 3 sec baad past booking
      setTimeout(() => {

        setPastBookings((prev) => [...prev, job]);

        setCompletedJobs((prev) =>
          prev.filter((item) => item.id !== job.id)
        );

      }, 3000);

    }, 5000);

  };

  return (

    <div className="p-8 bg-gray-100 min-h-screen">

      <h1 className="text-2xl font-bold mb-6 ml-25">
        Provider Dashboard
      </h1>

      <div className="flex flex-col gap-6 ml-25">

        {/* New Requests */}
        <div className="bg-white shadow-md rounded-xl p-6 w-[1000px]">

          <h3 className="font-semibold text-lg mb-4">
            New Requests
          </h3>

          {newRequests.map((job) => (

            <div key={job.id} className="flex justify-between items-center border-b pb-4">

              <div className="flex gap-3 items-center">

                <img src={job.img} className="w-10 h-10 rounded-full" />

                <div>
                  <p className="font-semibold">{job.name}</p>
                  <p className="text-sm text-gray-500">
                    {job.service} | {job.location}
                  </p>
                  <p className="text-xs text-gray-400">{job.time}</p>
                </div>

              </div>

              <div className="flex gap-2">

                <button
                  onClick={() => acceptJob(job)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Accept
                </button>

                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Decline
                </button>

              </div>

            </div>

          ))}

        </div>


        {/* Accepted Jobs */}
        <div className="bg-white shadow-md rounded-xl p-6 w-[1000px]">

          <h3 className="font-semibold text-lg mb-4">
            Accepted Jobs
          </h3>

          {acceptedJobs.map((job) => (

            <div key={job.id} className="flex justify-between items-center">

              <div className="flex gap-3 items-center">

                <img src={job.img} className="w-10 h-10 rounded-full" />

                <div>
                  <p className="font-semibold">{job.name}</p>
                  <p className="text-sm text-gray-500">
                    {job.service} | {job.location}
                  </p>
                </div>

              </div>

              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm">
                In Progress
              </span>

            </div>

          ))}

        </div>


        {/* Completed Jobs */}
        <div className="bg-white shadow-md rounded-xl p-6 w-[1000px]">

          <h3 className="font-semibold text-lg mb-4">
            Completed Jobs
          </h3>

          {completedJobs.map((job) => (

            <div key={job.id} className="flex justify-between items-center">

              <div className="flex gap-3 items-center">

                <img src={job.img} className="w-10 h-10 rounded-full" />

                <div>
                  <p className="font-semibold">{job.name}</p>
                  <p className="text-sm text-gray-500">
                    {job.service} | {job.location}
                  </p>
                </div>

              </div>

              <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm">
                Completed
              </span>

            </div>

          ))}

        </div>


        {/* Past Bookings */}
        <div className="bg-white shadow-md rounded-xl p-6 w-[1000px]">

          <h3 className="font-semibold text-lg mb-4">
            Past Bookings
          </h3>

          {pastBookings.map((job) => (

            <div key={job.id} className="flex justify-between items-center">

              <div className="flex gap-3 items-center">

                <img src={job.img} className="w-10 h-10 rounded-full" />

                <div>
                  <p className="font-semibold">{job.service}</p>
                  <p className="text-sm text-gray-500">
                    {job.location}
                  </p>
                </div>

              </div>

              <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded text-sm">
                Past
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default ProviderDashboard;