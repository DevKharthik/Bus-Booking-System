import React from 'react';

function Seat({ index, name, onSelect, isSelected, isBooked, isAdminView }) {
  return (
    <div
      className={`seat ${isBooked ? 'booked' : isSelected ? 'selected' : ''} ${isAdminView ? 'admin-view' : ''}`}
      onClick={isBooked || isAdminView ? null : onSelect}
    >
      {!isAdminView && name ? '' : name ? `Booked by ${name}` : `Seat ${index + 1}`}
    </div>
  );
}

export default Seat;
