import React, { useEffect, useState } from "react";


function ConfirmationMessage({ formData, onReset }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200); // slight delay for animation
  }, []);

  return (
    <div className={`form-step confirmation ${show ? "fade-in" : ""}`}>
      <h2 className="form-title">🎉 Reservation Confirmed!</h2>
      <p>Thank you, <strong>{formData.name}</strong>!</p>
      <div className="summary-box">
        <p><strong>📅 Date:</strong> {formData.date}</p>
        <p><strong>🕒 Time:</strong> {formData.time}</p>
        <p><strong>👥 Guests:</strong> {formData.guests}</p>
        <p><strong>📞 Contact:</strong> {formData.contact}</p>
        {formData.requests && <p><strong>📝 Requests:</strong> {formData.requests}</p>}
      </div>
      <button onClick={onReset}>Make Another Reservation</button>
    </div>
  );
}

export default ConfirmationMessage;
