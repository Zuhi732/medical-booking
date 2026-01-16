import { doctors } from "../data/doctors";
import DoctorCard from "./DoctorCard";

const TopDoctors = () => {
  return (
    <div className="my-16 px-4 md:px-12">
      <div className="text-center mb-10 space-y-2">
        <h2 className="text-3xl font-bold text-blue-600">Our Best Doctors</h2>
        <p className="text-gray-500">
          Trusted and experienced doctors provided just for you
        </p>
      </div>

      {/* Grid Layout for Doctors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default TopDoctors;
