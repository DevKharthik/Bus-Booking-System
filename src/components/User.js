import React, { useState } from 'react';
import Seat from './Seat';

function User({ seats, bookSeats }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingName, setBookingName] = useState('');

  const handleSelectSeat = (index) => {
    // Allow selection only if the seat is not already booked
    if (seats[index] === null) {
      setSelectedSeats(prev =>
        prev.includes(index) ? prev.filter(seat => seat !== index) : [...prev, index]
      );
    }
  };

  const handleBookSeats = () => {
    if (bookingName && selectedSeats.length > 0) {
      bookSeats(selectedSeats, bookingName);

      // Create a string with the seat numbers
      const seatNumbers = selectedSeats.map(seatIndex => seatIndex + 1).join(', ');

      // Display a confirmation alert with the user's name and seat numbers
      alert(`Booking Confirmed! Name: ${bookingName}, Seats: ${seatNumbers}`);

      // Clear the selections and name input
      setSelectedSeats([]);
      setBookingName('');
    }
  };

  return (
    <div>
      <h1>User - Available Seats</h1>
      <div className="seats">
        {seats.map((seat, index) => (
          <Seat
            key={index}
            index={index}
            onSelect={() => handleSelectSeat(index)}
            isSelected={selectedSeats.includes(index)}
            isBooked={seat !== null}
            isAdminView={false}
          />
        ))}
      </div>
      {selectedSeats.length > 0 && (
        <div className="booking-container">
          <input
            type="text"
            value={bookingName}
            onChange={(e) => setBookingName(e.target.value)}
            placeholder="Your Name"
          />
          <button onClick={handleBookSeats}>Book Selected Seats</button>
        </div>
      )}
    </div>
  );
}

export default User;
