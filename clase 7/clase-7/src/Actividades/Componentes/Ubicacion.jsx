import React, { useContext } from 'react'
import Contexto from '../Contexto/Contexto'

function Ubicacion() {
  const {alumnos} = useContext(Contexto)
  const idioma = alumnos[3].idioma
  return (
    <div className='Ubicacion'>
    
    <h1> {alumnos[idioma].boton2} </h1>

    <div className="texto">
    
    <p>{alumnos[idioma].direccion}</p>
    
    </div>
    
    </div>
  )
}

export default Ubicacion