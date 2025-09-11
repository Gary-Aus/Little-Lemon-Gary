import React from "react";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking");
  };

  return (
    <section className="cta">
      <div className="container">
        <h1>Welcome to Little Lemon</h1>
        <p>Delicious Mediterranean cuisine served fresh every day.</p>
        <button className="btn-booking" onClick={handleBooking}>
          Reserve a Table
        </button>
      </div>
    </section>
  );
}
