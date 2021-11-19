import React from 'react';

function Flat({name, price, url}) {
  return(
    <div className="card">
      <div className="card-img">
        <img src={url} alt={name}/>
      </div>
      <div className="card-description">
        <p className="card-title">{name}</p>
        <p className="card-price">{price}€</p>
      </div>
    </div>
  )
}

export default Flat
