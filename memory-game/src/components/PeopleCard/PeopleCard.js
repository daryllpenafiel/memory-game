import React from "react";
import "./PeopleCard.css";

const PeopleCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removePerson(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default PeopleCard;
