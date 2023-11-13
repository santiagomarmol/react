import React, { useReducer, useState } from 'react'


const currentTime = new Date()
const month = currentTime.getMonth()
const year = currentTime.getFullYear()
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
const valorInicial = { m: month, a: year }


const reducer = (state, action) => {
    let newMonth = state.m
    let newYear = state.a
    switch (action.type) {
        case "masM":
            newMonth = newMonth == 11 ? 0 : newMonth + 1
            break
        case "menosM":
            newMonth = newMonth == 0 ? 11 : newMonth - 1
            break
        case "menosA":
            newYear = newYear - 1
            break
        case "masA":
            newYear = newYear + 1
            break
    }
    return { m: newMonth, a: newYear }
}
function Calendario() {
    const [fecha, dispatch] = useReducer(reducer, valorInicial)
    return (
        <div>

            <h1 style={
                (fecha.m < month && fecha.a <= year || fecha.a < year) ? { color: 'red' } : { color: 'green' }}
            >{meses[fecha.m]}({fecha.a})</h1>



            <div className="btn">
                <button onClick={() => dispatch({ type: 'menosM' })}>-</button>
                <span>Mes:</span>
                <button onClick={() => dispatch({ type: 'masM' })}>+</button>
            </div>
            <div className="btn">
                <button onClick={() => dispatch({ type: 'menosA' })}>-</button>
                <span>Año:</span>
                <button onClick={() => dispatch({ type: 'masA' })}>+</button>
            </div>


        </div>
    )
}

export default Calendario