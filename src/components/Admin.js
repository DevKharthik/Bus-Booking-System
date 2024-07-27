import React from 'react';
import Seat from './Seat';

function Admin({ seats }) {
  // Calculate the total number of seats, booked seats, and available seats
  const totalSeats = seats.length;
  const bookedCount = seats.filter(seat => seat !== null).length;
  const availableCount = totalSeats - bookedCount;

  return (
    <div>
      <h1>Admin - All Seats</h1>
      <p>Total Seats: {totalSeats}</p>
      <p>Total Booked Seats: {bookedCount}</p>
      <p>Total Available Seats: {availableCount}</p>
      <div className="seats">
        {seats.map((seat, index) => (
          <Seat
            key={index}
            index={index}
            name={seat}
            isBooked={seat !== null}
            isAdminView={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Admin;
