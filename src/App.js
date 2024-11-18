
import React, { useState, useEffect } from "react";
import Header from './components/Header/Header';
import FilterBar from './components/FilterBar/FilterBar';
import TicketCard from './components/TicketCard/TicketCard';



import "./App.css";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setFilteredTickets(data.tickets || []); // Adjust based on the structure
        })
        .catch((error) => console.error(error));
}, []);


  const handleFilter = (filterType) => {
    // Example: Filter logic (update based on requirement)
    if (filterType === "group") {
      const grouped = tickets.sort((a, b) => a.group.localeCompare(b.group));
      setFilteredTickets([...grouped]);
    }
  };

  return (
    <div className="App">
      <Header />
      <FilterBar onFilter={handleFilter} />
      <div className="ticket-container">
       {Array.isArray(filteredTickets) && filteredTickets.map((ticket) => (
    <TicketCard key={ticket.id} ticket={ticket} />
))}

      </div>
    </div>
  );
};

export default App;
