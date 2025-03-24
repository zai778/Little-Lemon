import React, { useState } from "react";

function DateTimeSelector({ formData, setFormData, onNext }) {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = () => {
    if (!formData.date || !formData.time || formData.guests < 1) {
      setError("Please complete all fields correctly.");
      return;
    }
    onNext();
  };

  return (
    <div className="form-step">
      <h2 className="form-title">Reserve a Table</h2>

      <label className="form-label" htmlFor="date">Date</label>
      <input id="date" type="date" name="date" value={formData.date} onChange={handleChange} required />

      <label className="form-label" htmlFor="time">Time</label>
      <select id="time" name="time" value={formData.time} onChange={handleChange} required>
        <option value="">Select Time</option>
        <option value="6:00 PM">6:00 PM</option>
        <option value="7:00 PM">7:00 PM</option>
        <option value="8:00 PM">8:00 PM</option>
      </select>

      <label className="form-label"  htmlFor="guests">Number of Guests</label>
      <input
        id="guests"
        type="number"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        max="10"
        required
      />

      {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}

      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}

export default DateTimeSelector;
