import React, { useState } from "react";

function ContactForm({ formData, setFormData, onNext, onBack }) {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const isValidContact = (value) => {
    const phonePattern = /^\+?\d{8,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return phonePattern.test(value) || emailPattern.test(value);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.contact) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!isValidContact(formData.contact)) {
      setError("Please enter a valid email or phone number.");
      return;
    }
    onNext();
  };

  return (
    <div className="form-step">
      <h2 className="form-title">Contact Information</h2>

      <label className="form-label"  htmlFor="name">Full Name</label>
      <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label className="form-label" htmlFor="contact">Contact Info</label>
      <input
        id="contact"
        type="text"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        placeholder="Phone or Email"
        required
      />

      <label className="form-label"  htmlFor="requests">Special Requests (optional)</label>
      <textarea
        id="requests"
        name="requests"
        value={formData.requests}
        onChange={handleChange}
        placeholder="Any seating or dietary requests?"
      />

      {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}

      <div className="form-buttons">
        <button onClick={onBack}>Back</button>
        <button onClick={handleSubmit}>Confirm</button>
      </div>
    </div>
  );
}

export default ContactForm;
