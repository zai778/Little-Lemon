import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Confirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div>
        <p>No reservation data found.</p>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  const { name, date, time, guests, contact, requests } = state;

  return (
    <div className="page confirmation">
      <h2>Reservation Confirmed 🎉</h2>
      <p>Thank you, {name}!</p>
      <p>📅 Date: {date}</p>
      <p>🕒 Time: {time}</p>
      <p>👥 Guests: {guests}</p>
      <p>📞 Contact: {contact}</p>
      {requests && <p>📝 Requests: {requests}</p>}

      <button onClick={() => navigate("/")}>Make Another Reservation</button>
    </div>
  );
}

export default Confirmation;
