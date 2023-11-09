import React from 'react'
import './componentes/MapComponente'
import Actividad_2 from './actividades/Actividad_2'
import './App.css'



function App() {
  const reyes = [
    {
        nombre: "Atanagildo",
        reinado: 15,
        vacasComidas: 9
    }, {
        nombre: "Ervigio",
        reinado: 7,
        vacasComidas: 3
    }, {
        nombre: "Ataúlfo",
        reinado: 5,
        vacasComidas: 16
    }, {
        nombre: "Leovigildo",
        reinado: 18,
        vacasComidas: 3
    }, {
        nombre: "Sisebuto",
        reinado: 9,
        vacasComidas: 13
    }, {
        nombre: "Recesvinto",
        reinado: 19,
        vacasComidas: 11
    }, {
        nombre: "Teodorico",
        reinado: 33,
        vacasComidas: 12
    }
]

  return (

    <div className='App'>
    <Actividad_2 reyes={reyes}/>
    </div>
  )
}

export default App
