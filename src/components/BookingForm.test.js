import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);

  const dateLabel = screen.getByText("Choose date");
  const timeLabel = screen.getByText("Choose time");
  const submitButton = screen.getByText("Make Your reservation");

  expect(dateLabel).toBeInTheDocument();
  expect(timeLabel).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("Submit button is initially disabled", () => {
  render(<BookingForm />);
  const submitButton = screen.getByDisplayValue("Make Your reservation");
  expect(submitButton).toBeDisabled();
});

test("Date input has correct min attribute", () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toHaveAttribute("min");
});
