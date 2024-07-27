import React from 'react';

function TicketItem({ ticket, deleteTicket }) {
  return (
    <div className="ticket-item">
      <span>{ticket.name}</span>
      <span>Seat: {ticket.seatNumber}</span>
      <button onClick={() => deleteTicket(ticket.id)}>Cancel</button>
    </div>
  );
}

export default TicketItem;
