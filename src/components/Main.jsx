import React from "react";
import { useReducer, useEffect } from "react";
import BookingForm from "./BookingForm";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATE":
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
};

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const timesReducer = (state, action) => {
  switch (action.type) {
    case "SET_TIMES":
      return action.payload;
    default:
      return state;
  }
};

export default function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  useEffect(() => {
    async function loadInitialTimes() {
      if (
        typeof window !== "undefined" &&
        typeof window.fetchAPI === "function"
      ) {
        try {
          const today = new Date();

          const times = await window.fetchAPI(today);
          console.log(times);

          dispatch({ type: "SET_TIMES", payload: times });
        } catch (err) {
          console.error("fetchAPI error (initial):", err);
        }
      } else {
        console.warn("fetchAPI not available on window; using default times");
      }
    }

    loadInitialTimes();
  }, []);

  const updateTimesForDate = async (dateString) => {
    if (
      typeof window !== "undefined" &&
      typeof window.fetchAPI === "function"
    ) {
      try {
        const times = await window.fetchAPI(new Date(dateString));
        dispatch({ type: "SET_TIMES", payload: times });
      } catch (err) {
        console.error("fetchAPI error (update):", err);
      }
    } else {
      console.warn("fetchAPI not available; cannot update times from API");
    }
  };

  return (
    <main>
      <h2>Book a Table</h2>
      <p>Reserve your table in advance to enjoy a great dining experience.</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}
