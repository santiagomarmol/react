import React from 'react'
import './actividades.css'

function Actividad_1({reyes}) {
    const url = 'https://www.html6.es/img/rey_'
    const reyesGodos = reyes.map(value =>
        <div className="card" key={value.nombre}>
            <p>
                <span>{value.nombre.toUpperCase()}</span> Ha comido {value.reinado*value.vacasComidas*365} vacas En  {value.reinado} años de reinado
            </p>
            <img src={url+value.nombre.toLowerCase()} alt="" />
        </div>)

    return (
        <>
            {reyesGodos}
        </>
    )
}

export default Actividad_1

