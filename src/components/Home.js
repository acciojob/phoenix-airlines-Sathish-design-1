import React from "react";

import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h2>Welcome to Flight Booking App</h2>
            <button onClick={() => navigate("/flight-search")}>
                SEARCH FLIGHTS HERE
            </button>
        </div>
    );
}
