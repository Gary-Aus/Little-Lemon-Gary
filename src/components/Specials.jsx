import React from "react";

import greek_salad from "../assets/greek_salad.jpg";
import lemon_dessert from "../assets/lemon_dessert.jpg";
import M_A from "../assets/Mario_Adrian_A.jpg";

export default function Specials() {
  const specials = [
    {
      id: 1,
      name: "Greek Salad",
      price: "$12.99",
      img: greek_salad,
    },
    {
      id: 2,
      name: "Lemon Dessert",
      price: "$5.99",
      img: lemon_dessert,
    },
    {
      id: 3,
      name: "Bruschetta",
      price: "$4.99",
      img: M_A,
    },
  ];

  return (
    <section className="specials container">
      <h2>Specials</h2>

      <div className="cards">
        {specials.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.name} className="card-img" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
