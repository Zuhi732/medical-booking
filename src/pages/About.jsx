import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "MedicalApp | About Us";
  }, []);

  return (
    <div
      style={{
        padding: "50px",
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ color: "purple", fontSize: "3rem", marginBottom: "20px" }}>
        About Us
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#555", lineHeight: "1.6" }}>
        Welcome to <strong>MedicalApp</strong>. We are dedicated to providing
        the best medical service to our patients. Our platform connects you with
        expert doctors from various specialists to ensure your health is in good
        hands.
      </p>
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          background: "#f9f9f9",
          borderRadius: "10px",
        }}
      >
        <h3 style={{ color: "#333" }}>Our Mission</h3>
        <p>
          To make quality healthcare accessible to everyone, anytime, anywhere.
        </p>
      </div>
    </div>
  );
};

export default About;
