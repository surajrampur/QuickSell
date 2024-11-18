import React from "react";
import "./TicketCard.css";

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h2>{ticket.title}</h2>
      <p>{ticket.description}</p>
      <span className="ticket-group">{ticket.group}</span>
    </div>
  );
};

export default TicketCard;
