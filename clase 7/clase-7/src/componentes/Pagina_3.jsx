import React, { useContext } from 'react'
import { Contexto } from '../contexto/Contexto'

function Pagina_3() {
    const { color } = useContext(Contexto)
    return (
        <div className='paginas' style={{ background: color }}>
            Pagina_3
        </div>
    )
}

export default Pagina_3