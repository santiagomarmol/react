import React, { useContext } from 'react'
import '../actividad.css'
import Contexto from '../Contexto/Contexto'

function Idiomas() {
    const { setAlumnos } = useContext(Contexto) // Acceso a setAlumnos del contexto
    const { alumnos } = useContext(Contexto) // Acceso a alumnos del contexto
    const sustitucion = (posicion) => {
        setAlumnos(
            alumnos.map((datos, indice) => indice == 3 ? { ...datos, idioma: posicion } : { ...datos })
        )
    }
    const cambio1 = () => {
        sustitucion(0) // Cambio a idioma 1
    }
    const cambio2 = () => {
        sustitucion(1) // Cambio a idioma 2
    }

    const cambio3 = () => {
        sustitucion(2) // Cambio a idioma 3
    }
    return (
        <>
            <div className='idiomas'>
                <div className="baderas" onClick={cambio1}>
                    <img src="../img/spain.jpg" alt="" />
                </div>
                <div className="baderas" onClick={cambio2}>
                    <img src="../img/uk.png" alt="" />
                </div>
                <div className="baderas" onClick={cambio3}>
                    <img src="../img/francia.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Idiomas