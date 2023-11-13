import { useState } from 'react'
import './App.css'
// import A from './Paginas/A'
// import B from './Paginas/B'
// import C from './Paginas/C'
// import D from './Paginas/D'
// import Error404 from './Paginas/Error404'
// import Nav from './componente/Nav'

import Nav from './Actividades/Componentes/Nav'
import Home from './Actividades/Paginas/Home'
import Error404 from './Actividades/Paginas/Error404'
import Modelo from './Actividades/Componentes/Modelo'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

function App() {

  return (

    // <BrowserRouter>
    // <Nav/>
    //   <Routes>
    //     <Route path="/" element={<A />} />
    //     <Route path="/Pagina2" element={<B />} />
    //     <Route path="/Pagina3" element={<C />} />
    //     <Route path="/Pagina4/:letra" element={<D />} />
    //     <Route path="/Pagina1" element={<Navigate to={'/'} />} />
    //     <Route path="*" element={<Error404 />} />
    //   </Routes>

    // </BrowserRouter>



    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reyes/:rey" element={<Modelo />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>

  )
}



export default App
