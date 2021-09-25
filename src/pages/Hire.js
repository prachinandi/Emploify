import React from "react";
import { List } from "../Jobs/JobList";
import Job from "../components/JobItem";
import "../styles/Hire.css";

function Lists() {
  return (
    <div className="hire">
      <h1 className="menuTitle">HIRE NOW</h1>
      <div className="menuList">
        {List.map((menuItem, key) => {
          return (
            <Job
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              
            />
          );
        })}
      </div>
    </div>
  );
}

export default Lists;
