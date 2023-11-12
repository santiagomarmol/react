import React, { useContext } from 'react'
import { Contexto } from '../contexto/Contexto'

function Pagina_1() {
    const { color } = useContext(Contexto)
    return (
        <div className='paginas' style={{ background: color }}>
            Pagina_1
        </div>
    )
}

export default Pagina_1