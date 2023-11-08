import { useState } from "react";
import "./App.css";


const App = () => {
  const [contador , setContador] = useState(0)
  const [mensaje , setMensaje] = useState()

  const reyesGodos=[
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    },{
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },{
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar"
    }
  ]
  const cambiar = ()=>{
    setContador(contador+1)
    if (contador+1 >=reyesGodos.length) {
      setContador(0)
    }
    setMensaje(<h2>Al rey <span className="rojo" >{reyesGodos[contador].nombre}</span> le gusta <span className="verde" >{reyesGodos[contador].aficion}</span> </h2>)
  }

  

  return (
    <>
      <button onClick={cambiar}>Siguiente</button>
      <div className="App">{mensaje}</div>
    </>
  )
}
export default App;