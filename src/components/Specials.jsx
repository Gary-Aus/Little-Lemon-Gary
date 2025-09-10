import React from "react";

export default function Specials() {
  const specials = [
    { id: 1, name: "Greek Salad", price: "$12.99" },
    { id: 2, name: "Bruschetta", price: "$5.99" },
    { id: 3, name: "Lemon Dessert", price: "$4.99" },
  ];

  return (
    <section className="specials container">
      <h2>Specials</h2>
      <div className="cards">
        {specials.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
