import React from 'react'


function Card({ nombre, ft, precio , color, setTotal }) {
  const comprar=(elemento)=>{
    setTotal((e)=>e+precio)
    elemento.target.parentNode.parentNode.style.display='none'
  }

  return (
    <div className="card" style={{backgroundColor:color}}>
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