import React from 'react'


function Card({ nombre, ft, precio , setTotal }) {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <img src={ft} alt="" />
      <div className="info">
        <p> {precio}$</p>
        <button onClick={comprar}>Comprar</button>
      </div>
    </div>
  )
}

export default Card