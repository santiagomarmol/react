import React from 'react'
import './actividades.css'

function Actividad_2({ reyes }) {
  const eliminar =(e)=>{
    e.target.parentNode.remove()
  }

  const reyesGodos = reyes.filter(valor => !valor.nombre.includes('g')).
    map(valor =>
      <div className="card" key={valor.nombre}>
        <p>El rey {valor.nombre} </p>
        <button onClick={eliminar}>Eliminar</button>
      </div>
    )
  return (
    <>
    {reyesGodos}
    </>
  )
}

export default Actividad_2