import React from 'react'
import { useContext } from 'react'
import { Contexto } from '../contexto/Contexto'

function Colores() {
    const {setColor} = useContext(Contexto)
  return (
    <div className='colores'>
    
    <div className='color' onClick={()=>{
        setColor('brown')
    }}></div>
    <div className='color' onClick={()=>{
        setColor('#2a2aa5')
    }}></div>
    <div className='color' onClick={()=>{
        setColor('#6c2aa5')
    }}></div>
    <div className='color' onClick={()=>{
        setColor('#2aa52a')
    }}></div>
    <div className='color' onClick={()=>{
        setColor('#b8c31b')
    }}></div>

    </div>
  )
}

export default Colores