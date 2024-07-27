import React from 'react';
import TicketItem from './TicketItem';

function TicketList({ tickets, deleteTicket }) {
  return (
    <div>
      {tickets.map(ticket => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
          deleteTicket={deleteTicket}
        />
      ))}
    </div>
  );
}

export default TicketList;
