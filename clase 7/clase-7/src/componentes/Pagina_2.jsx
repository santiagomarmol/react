import React, { useContext } from 'react'
import { Contexto } from '../contexto/Contexto'

function Pagina_2() {
    const { color } = useContext(Contexto)
    return (
        <div className='paginas' style={{ background: color }}>
            Pagina_2
        </div>
    )
}

export default Pagina_2