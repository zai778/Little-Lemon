import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DateTimeSelector from "../components/DateTimeSelector";

describe("DateTimeSelector", () => {
  const mockNext = jest.fn();
  const setFormData = jest.fn();
  const formData = {
    date: "",
    time: "",
    guests: "1",
  };

  test("renders all form inputs", () => {
    render(
      <DateTimeSelector
        formData={formData}
        setFormData={setFormData}
        onNext={mockNext}
      />
    );

    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByText(/Next/i)).toBeInTheDocument();
  });

  test("shows error if fields are empty and next is clicked", () => {
    render(
      <DateTimeSelector
        formData={formData}
        setFormData={setFormData}
        onNext={mockNext}
      />
    );

    fireEvent.click(screen.getByText("Next"));
    expect(screen.getByText(/Please complete all fields/i)).toBeInTheDocument();
    expect(mockNext).not.toHaveBeenCalled();
  });
});
