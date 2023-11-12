import React from 'react'
import { useContext } from 'react'
import Contexto from '../Contexto/Contexto'

function Profesora() {
   const { alumnos } = useContext(Contexto)
   const idioma = alumnos[3].idioma
  const imagen = '../img/'+alumnos[idioma].foto
  return (
    <div className='Profesora'>

      <h1> {alumnos[idioma].boton1} </h1>
      <div className="foto">

       <img src={imagen} alt="" className="imagen" />

      </div>
      <div className="nombre">
        
      </div>

    </div>
  )
}

export default Profesora