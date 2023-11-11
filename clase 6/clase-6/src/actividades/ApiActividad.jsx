import React from 'react'

import { useEffect, useState } from 'react'

function ApiActividad() {
    const [datos, setDatos] = useState(null);
    const cambiar =()=>{      
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then((respuesta) => respuesta.json())
    .then((datos) => setDatos(datos.delivery))
    .catch(console.log);

    }

    useEffect(() => {
        cambiar()
  }, []);

  
    return (
        <>
        <h1> {datos} </h1>
        <button onClick={cambiar}>Cambiar</button>
        </>
    )
}

export default ApiActividad