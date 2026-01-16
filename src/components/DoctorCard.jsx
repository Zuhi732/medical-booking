import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const { id, name, speciality, image, fee } = doctor;

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-100">
      <figure className="px-5 pt-5">
        <img
          src={image}
          alt={name}
          className="rounded-xl w-full h-48 object-cover bg-blue-50"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-blue-600 font-bold">{name}</h2>
        <p className="font-semibold text-gray-600">{speciality}</p>
        <p className="text-gray-500 text-sm">
          Consultation Fee: <span className="text-black font-bold">${fee}</span>
        </p>
        <div className="card-actions mt-2">
          <Link
            to={`/doctors/${id}`}
            className="btn btn-outline btn-primary btn-sm px-6"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
