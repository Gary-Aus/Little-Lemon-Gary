import { useState } from "react";

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  // 检查表单是否有效
  const isFormValid = date && time && guests > 0 && occasion;

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);

    // 触发 reducer 更新 availableTimes
    if (dispatch && typeof dispatch === "function") {
      dispatch({ type: "UPDATE_DATE", date: newDate });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    alert(
      `Reservation made!\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nOccasion: ${occasion}`
    );
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        min={new Date().toISOString().split("T")[0]}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">-- Select a time --</option>
        {availableTimes &&
          availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        placeholder="1"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">-- Select occasion --</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        className="btn-submit"
        disabled={!isFormValid} // 禁用无效提交
        // disabled
      />
    </form>
  );
}

export default BookingForm;
