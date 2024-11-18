import React from "react";
import "./FilterBar.css";
import logo from '../../assets/images/Display.svg'; 
const FilterBar = ({ onFilter }) => {
  return (
    <div className="filter-bar">
      <button onClick={() => onFilter("group")}>Group Tickets</button>
      <button onClick={() => onFilter("sort")}>Sort Tickets</button>
    </div>
  );
};

export default FilterBar;
