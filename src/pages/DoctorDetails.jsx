import { useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { doctors } from "../data/doctors";

const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));
  useEffect(() => {
    if (doctor) {
      document.title = `MedicalApp | ${doctor.name}`;
    }
  }, [doctor]);
  if (!doctor) {
    return <div className="text-center py-20 text-2xl">Doctor not found!</div>;
  }

  const {
    name,
    education,
    speciality,
    workplace,
    experience,
    fee,
    availability,
    image,
    designation,
  } = doctor;

  const handleBookAppointment = () => {
    const bookingData = {
      id: doctor.id,
      name: doctor.name,
      speciality: doctor.speciality,
      fee: doctor.fee,
      image: doctor.image,
      bookingDate: new Date().toLocaleDateString(), // আজকের তারিখ
    };

    // আগের বুকিংগুলো চেক করা
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // ডুপ্লিকেট চেক (একই ডাক্তার দুইবার বুক করা যাবে না)
    const isExist = savedBookings.find((b) => b.id === doctor.id);
    if (isExist) {
      toast.error("You have already booked this doctor!");
      return;
    }

    // নতুন বুকিং সেভ করা
    const newBookings = [...savedBookings, bookingData];
    localStorage.setItem("bookings", JSON.stringify(newBookings));

    toast.success("Appointment Booked Successfully!");
  };

  return (
    <div className="hero min-h-screen bg-base-100 px-4 md:px-20">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <img
          src={image}
          className="max-w-sm rounded-lg shadow-2xl bg-blue-50"
          alt={name}
        />

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-blue-600">{name}</h1>
          <h3 className="text-xl font-semibold text-gray-700">{speciality}</h3>
          <div className="badge badge-primary badge-outline">{designation}</div>

          <p className="py-2 text-gray-600">
            Top-rated {speciality} with over {experience} of experience in
            medical field. Dedicated to providing the best care at{" "}
            <span className="font-bold">{workplace}</span>.
          </p>

          <div className="space-y-2">
            <p>
              <strong>🎓 Education:</strong> {education}
            </p>
            <p>
              <strong>🏥 Workplace:</strong> {workplace}
            </p>
            <p>
              <strong>📅 Availability:</strong> {availability.join(", ")}
            </p>
            <p>
              <strong>💰 Consultation Fee:</strong>{" "}
              <span className="text-xl font-bold text-orange-600">${fee}</span>
            </p>
          </div>

          <div className="card-actions mt-6">
            <button
              onClick={handleBookAppointment}
              className="btn btn-primary w-full md:w-auto"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
