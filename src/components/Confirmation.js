import React from "react";
import { useNavigate } from "react-router-dom";

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h3>Thank you for the Booking.</h3>
      <button onClick={() => navigate("/")}>BACK TO HOME</button>
    </div>
  );
}
