import { useEffect, useState } from "react";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // আগে ছিল localhost, এখন আপনার লাইভ সার্ভার লিংক বসানো হলো
    fetch("https://medical-booking-server.vercel.app/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const handleAddDoctor = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const specialty = form.specialty.value;
    const price = form.price.value;
    const newDoctor = { name, specialty, price };

    // এখানেও লাইভ সার্ভার লিংক বসানো হলো
    fetch("https://medical-booking-server.vercel.app/doctors", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newDoctor),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Doctor Added Successfully!");
          const newDoctors = [...doctors, newDoctor];
          setDoctors(newDoctors);
          form.reset();
        }
      });
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", color: "purple", marginBottom: "20px" }}>
        Our Expert Doctors
      </h2>

      {/* Form Section */}
      <div
        style={{
          marginBottom: "30px",
          background: "#f4f4f4",
          padding: "20px",
          display: "inline-block",
          borderRadius: "10px",
        }}
      >
        <h3>Add a New Doctor</h3>
        <form onSubmit={handleAddDoctor}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            style={{ padding: "10px", margin: "5px" }}
          />
          <input
            type="text"
            name="specialty"
            placeholder="Specialty"
            required
            style={{ padding: "10px", margin: "5px" }}
          />
          <input
            type="number"
            name="price"
            placeholder="Fee"
            required
            style={{ padding: "10px", margin: "5px" }}
          />
          <br />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              background: "purple",
              color: "white",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Add Doctor
          </button>
        </form>
      </div>

      {/* List Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            style={{
              border: "2px solid purple",
              padding: "20px",
              borderRadius: "10px",
              background: "white",
            }}
          >
            <h3 style={{ color: "purple" }}>{doctor.name}</h3>
            <p style={{ fontWeight: "bold" }}>{doctor.specialty}</p>
            <p>Fee: {doctor.price} Taka</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
