import { useState } from 'react'
//import Componente from './Componente'
import ft1 from './images/rey_1.png'
import ft2 from './images/rey_2.png'
import ft3 from './images/rey_3.png'
import ft4 from './images/rey_4.png'
import ft5 from './images/rey_5.png'
import ft6 from './images/rey_6.png'
import Card from './actividad/Card'
import './actividad/Card.css'



function App() {
  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69
    }
  ]

  const [total ,setTotal] = useState(0)

  return (
    // <>
    // <h2>Reyes Godos:</h2>
    //   <Componente rey="Atanagildo" reses={5} vivo={true} />
    //   <Componente />
    // </>

    <>
    <h1>Total a Pagar : 0</h1>
    <div className='App'>
    <Card nombre={reyes[1].nombre} ft={ft2} precio={reyes[1].precio} setTotal={setTotal} />
    <Card nombre={reyes[0].nombre} ft={ft1} precio={reyes[0].precio} setTotal={setTotal} />
    <Card nombre={reyes[2].nombre} ft={ft3} precio={reyes[2].precio} setTotal={setTotal} />
    <Card nombre={reyes[3].nombre} ft={ft4} precio={reyes[3].precio} setTotal={setTotal} />
    <Card nombre={reyes[4].nombre} ft={ft5} precio={reyes[4].precio} setTotal={setTotal} />
    <Card nombre={reyes[5].nombre} ft={ft6} precio={reyes[5].precio} setTotal={setTotal} />
    </div>
    </>
  )
}

export default App
