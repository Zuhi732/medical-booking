import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    document.title = "MedicalApp | My Bookings"; // <--- এই লাইনটি যোগ করুন

    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  const handleCancel = (id) => {
    const remaining = bookings.filter((item) => item.id !== id);
    setBookings(remaining);
    localStorage.setItem("bookings", JSON.stringify(remaining));
    toast.success("Booking Cancelled Successfully!");
  };

  // চার্টের জন্য কালার
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  return (
    <div className="min-h-screen px-4 md:px-20 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
        My Appointments ({bookings.length})
      </h2>

      {bookings.length === 0 ? (
        <div className="text-center mt-20">
          <h3 className="text-2xl font-semibold text-gray-500">
            No appointments found!
          </h3>
          <Link to="/" className="btn btn-primary mt-4">
            Book Now
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Table Section */}
          <div className="overflow-x-auto flex-1">
            <table className="table w-full">
              <thead>
                <tr className="bg-base-200">
                  <th>Avatar</th>
                  <th>Doctor Name</th>
                  <th>Date</th>
                  <th>Fee</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>
                      <div className="avatar">
                        <div className="w-12 h-12 rounded-full">
                          <img src={booking.image} alt="Doctor" />
                        </div>
                      </div>
                    </td>
                    <td className="font-bold">{booking.name}</td>
                    <td>{booking.bookingDate}</td>
                    <td className="font-bold text-orange-600">
                      ${booking.fee}
                    </td>
                    <td>
                      <button
                        onClick={() => handleCancel(booking.id)}
                        className="btn btn-error btn-xs text-white"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Chart Section */}
          <div className="flex-1 bg-base-100 p-5 shadow-xl rounded-xl border">
            <h3 className="text-xl font-bold mb-5 text-center">
              Appointment Fees Chart
            </h3>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bookings}>
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="fee" fill="#8884d8">
                    {bookings.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
