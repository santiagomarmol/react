import React, { useState } from 'react'

function ErrorApp() {
    const [error, setErro] = useState('')

    return (
        <div>
        <button onClick={()=>setErro('Error en el servidor')}>Error En Servidor</button>
        <button onClick={()=>setErro('Error en el Al Enviar Datos')}>Error AL Enviar</button>
        <button onClick={()=>setErro('Error en el En El Sistema')}>Error En El Sistema</button>
        <button onClick={()=>setErro('')}>Sin Errores</button>
            {error && <h1>{error}</h1>}
        </div>
    )
}

export default ErrorApp