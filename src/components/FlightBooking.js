import React from "react";
import { useNavigate } from "react-router-dom";

export default function FlightBooking() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h3>Booking Confirmation for Flight Air India (AI-275)</h3>

            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email ID" required />
            <input type="text" placeholder="Mobile Number" required />

            <button onClick={() => navigate("/confirmation")}>
                CONFIRM BOOKING
            </button>
        </div>
    );
}
