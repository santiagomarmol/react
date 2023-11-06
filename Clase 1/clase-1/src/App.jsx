import imagen from './assets/ft.jpg'
import './App.css'

function App() {
  let nombre = 'santiago';
  let caja = <p>texto de prueba</p>
  return (

    <div className='app'>
      <img src={imagen} alt="" />
      <h1>react</h1>
      <input type="text" value={nombre}/>
      {caja}
      
    </div>
  )
}

export default App
