import React, { useState } from "react";
import DateTimeSelector from "../components/DateTimeSelector";
import ContactForm from "../components/ContactForm";
import ConfirmationMessage from "../components/ConfirmationMessage";
import { db } from "../firebase"; 
import { collection, addDoc } from "firebase/firestore";


function Reservation() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "1",
    name: "",
    contact: "",
    requests: "",
  });

const next = async () => {
  const nextStep = step + 1;
  setStep(nextStep);

  if (nextStep === 3) {
    
    const saved = JSON.parse(localStorage.getItem("reservations")) || [];
    const updated = [...saved, formData];
    localStorage.setItem("reservations", JSON.stringify(updated));

    
    try {
      await addDoc(collection(db, "reservations"), formData);
      console.log("Reservation saved to Firebase!");
    } catch (err) {
      console.error("Error saving reservation:", err);
    }
  }
};

  const back = () => {
    setStep(step - 1);
  };

  const reset = () => {
    setFormData({
      date: "",
      time: "",
      guests: "1",
      name: "",
      contact: "",
      requests: "",
    });
    setStep(1);
  };

  return (
    <div className="reservation-page">
      {step === 1 && (
        <DateTimeSelector
          formData={formData}
          setFormData={setFormData}
          onNext={next}
        />
      )}

      {step === 2 && (
        <ContactForm
          formData={formData}
          setFormData={setFormData}
          onNext={next}
          onBack={back}
        />
      )}

      {step === 3 && (
        <ConfirmationMessage
          formData={formData}
          onReset={reset}
        />
      )}
    </div>
  );
}

export default Reservation;
