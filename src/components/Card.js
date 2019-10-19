import React from 'react';
import './Card.css'

const Card = ({ name, email, id }) => {
  return (
    <div className="mw4 tc bg-light-green dib br3 pa3 ma1 grow bw2 shadow-5 card-content">
      <img alt="robots" src={`https://robohash.org/${id}?80x80`} />
      <div>
        <h6 className="ma1" style={{fontSize: 7.5}}>{name}</h6>
        <p className="ma1" style={{fontSize: 7}}>{email}</p>
      </div>
    </div>
  )
}

export default Card;
