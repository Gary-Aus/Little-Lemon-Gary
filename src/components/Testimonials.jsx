import React from "react";

export default function Testimonials() {
  const reviews = [
    { id: 1, name: "Anna", rating: "⭐⭐⭐⭐⭐", text: "Amazing food!" },
    { id: 2, name: "John", rating: "⭐⭐⭐⭐", text: "Great atmosphere." },
  ];

  return (
    <section className="testimonials container">
      <h2>Customer Testimonials</h2>

      <div className="cards">
        {reviews.map((r) => (
          <div key={r.id} className="card">
            <p className="rating">{r.rating}</p>
            <p>{r.text}</p>
            <p>
              <strong>- {r.name}</strong>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
