import React from 'react';
import './card.styles.css';

const Card = ({id, name, email}) => {



    return (
      <div className="card bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${id}.png?set=set2&size=200x200`} alt="Robots Photos" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
}

export default Card;
