import React, { useContext, useState } from 'react'
import '../actividad.css'
import Profesora from './Profesora'
import Ubicacion from './Ubicacion'
import Contexto from '../Contexto/Contexto'

function Pagina() {
    const {alumnos} = useContext(Contexto)
    const idioma = alumnos[3].idioma

    const[ocultar1 , setOcultar1] = useState(false)
    const[ocultar2 , setOcultar2] = useState(false)
    const mostrar1= ()=>{
        setOcultar1(!ocultar1)
        setOcultar2(false)
    }

    const mostrar2 = ()=>{
        setOcultar2(!ocultar2)
        setOcultar1(false)
    }
    

    
    return (
        <>

            <h1> {alumnos[idioma].titulo} </h1>
            <h2> {alumnos[idioma].texto} </h2>

            <div className="btn">
                <button onClick={mostrar1}>{alumnos[idioma].boton1}</button>
                <button onClick={mostrar2}>{alumnos[idioma].boton2}</button>
            </div>

            {ocultar1 ?  <Profesora /> : null}
           
            {ocultar2 ? <Ubicacion /> : null}
            

        </>
    )
}

export default Pagina