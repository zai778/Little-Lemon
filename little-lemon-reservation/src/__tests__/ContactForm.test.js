import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../components/ContactForm";

describe("ContactForm", () => {
  const mockNext = jest.fn();
  const mockBack = jest.fn();
  const setFormData = jest.fn();

  const baseFormData = {
    name: "",
    contact: "",
    requests: "",
  };

  test("renders contact form fields", () => {
    render(
      <ContactForm
        formData={baseFormData}
        setFormData={setFormData}
        onNext={mockNext}
        onBack={mockBack}
      />
    );

    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contact Info/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Special Requests/i)).toBeInTheDocument();
    expect(screen.getByText(/Confirm/i)).toBeInTheDocument();
  });

  test("shows error if fields are empty", () => {
    render(
      <ContactForm
        formData={baseFormData}
        setFormData={setFormData}
        onNext={mockNext}
        onBack={mockBack}
      />
    );

    fireEvent.click(screen.getByText("Confirm"));

    expect(screen.getByText(/Please fill in all required fields/i)).toBeInTheDocument();
    expect(mockNext).not.toHaveBeenCalled();
  });

  test("validates email or phone correctly", () => {
    const validData = {
      name: "Zaid",
      contact: "zaid@example.com",
      requests: "",
    };

    render(
      <ContactForm
        formData={validData}
        setFormData={setFormData}
        onNext={mockNext}
        onBack={mockBack}
      />
    );

    fireEvent.click(screen.getByText("Confirm"));
    expect(mockNext).toHaveBeenCalled();
  });
});
