import React from "react";
import BookingForm from "../components/BookingForm";

export default function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className="container">
      <h2>Book a Table</h2>
      <p>Reserve your table in advance to enjoy a great dining experience.</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>

    // <section className="container">
    //   <h2>Book a Table</h2>

    //   <form className="booking-form">
    //     <label>
    //       Date:
    //       <input type="date" required />
    //     </label>

    //     <label>
    //       Time:
    //       <input type="time" required />
    //     </label>

    //     <label>
    //       Number of Guests:
    //       <input type="number" min="1" max="20" required />
    //     </label>

    //     <button type="submit" className="btn-primary">
    //       Reserve
    //     </button>
    //   </form>
    // </section>
  );
}
