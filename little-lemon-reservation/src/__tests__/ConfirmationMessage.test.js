import React from "react";
import { render, screen } from "@testing-library/react";
import ConfirmationMessage from "../components/ConfirmationMessage";

describe("ConfirmationMessage", () => {
  const formData = {
    name: "Zaed",
    date: "2025-03-31",
    time: "19:30",
    guests: "2",
    contact: "zaed@example.com",
    requests: "Near window",
  };

  test("renders confirmation details", () => {
    render(<ConfirmationMessage formData={formData} onReset={() => {}} />);

    expect(screen.getByText(/Reservation Confirmed/i)).toBeInTheDocument();
    expect(screen.getByText(/Zaed/)).toBeInTheDocument();
    expect(screen.getByText(/2025-03-31/)).toBeInTheDocument();
    expect(screen.getByText(/19:30/)).toBeInTheDocument();
    expect(screen.getByText(/Near window/)).toBeInTheDocument();
  });
});
