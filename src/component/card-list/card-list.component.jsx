import React from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ robots }) => {
  return (
    <div className="card-list">
      {robots.map((robot, i) => (
        <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
      ))}
    </div>
  );
};

export default CardList;
