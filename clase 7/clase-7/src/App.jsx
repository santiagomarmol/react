// import Pagina_1 from './componentes/Pagina_1'
// import Pagina_2 from './componentes/Pagina_2'
// import Pagina_3 from './componentes/Pagina_3'
// import Colores from './componentes/Colores'
//import { Datos } from './contexto/Contexto'
import './App.css'
import { useState } from 'react'
import Pagina from './Actividades/Componentes/Pagina'
import Idiomas from './Actividades/Componentes/Idiomas'
import Provider from './Actividades/Contexto/Privider'

function App() {


  return (
    // <>
    //   <Datos>
    //     <div className="App">
    //       <Pagina_1 />
    //       <Pagina_2 />
    //       <Pagina_3 />
    //     </div>

    //     <Colores />

    //   </Datos>
    // </>

    <Provider>
      <div className='banderas'>

        <Idiomas />

      </div>




      <div className='contenido'>

        <Pagina />

      </div>
    </Provider>
  )
}

export default App
