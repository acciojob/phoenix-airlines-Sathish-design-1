import React from "react";
import { useNavigate } from "react-router-dom";

export default function FlightSearch() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <label>
        <input type="radio" name="trip" defaultChecked /> One Way
      </label>
      <label>
        <input type="radio" name="trip" /> Round Trip
      </label>

      <select>
        <option>Source City</option>
        <option>Mumbai</option>
      </select>

      <select>
        <option>Destination City</option>
        <option>Bengaluru</option>
      </select>

      <input type="date" />

      <button
        className="book-flight"
        onClick={() => navigate("/flight-booking")}
      >
        SEARCH FLIGHT
      </button>
    </div>
  );
}
