import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {
  // const [contador, setContador] = useState(0)
  // const aumetar = () => {
  //   setContador(contador+1)
  // }
  // const disminuir = () => {
  //   setContador(contador-1)
  // } 
  // const restablecer = () => {
  //   setContador(0)
  // }

  const [numer1, setNumero1] = useState()
  const [numer2, setNumero2] = useState()
  const [resultado, setResultado] = useState()

  const sumar = () => {
   setResultado(numer1 + numer2)
     }

     const modificar = (e) => {
      setNumero1(Number(e.target.value))
     }
     const modificar2 = (e) => {
      setNumero2(Number(e.target.value))
     }
  
  return (
    // <div>
    //   <h1>{contador}</h1>
    //   <div className="contador">
    //   <button onClick={disminuir}>Disminuir</button>
    //   <button onClick={aumetar}>Aumentar</button>
    //   <button onClick={restablecer}>Restablecer</button>
    //   </div>
    // </div>
    

    <div className="sumador">
    
    <input type="Number" value={numer1} onChange={modificar} />
    +
    <input type="Number" value={numer2} onChange={modificar2} />
    =
    <input type="Number" value={resultado} readOnly/>

    <button onClick={sumar}>Sumar</button>
    
    </div>
  )
}

export default App