import React from 'react';
import './Card.css'

const Card = props => (
  <div 
    className="card"
    onClick={() => props.clicked(props.id)}>
      <div className="img-container">
      <img 
      className="img"
      alt={props.name}
      src={props.img}
        />
      </div>


  </div>  
)

export default Card