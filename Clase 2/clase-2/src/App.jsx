import rey from './assets/images/rey.png'
import rey2 from './assets/images/rey2.png'
import './App.css'
import { useRef } from 'react'

function App() {
  const refApp = useRef()
  const peso = 4000

  const incremantar=(e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1
    if (e.target.innerHTML >= 10) {
      e.target.innerHTML = 1
    }

    if (e.target.innerHTML >= 8) {
      e.target.style.backgroundColor = 'red'
    }else{
      e.target.style.backgroundColor = 'goldenrod'
    }
  }

  const combertir=() => {
    refApp.current.innerHTML = Number(refApp.current.innerHTML)*peso
  }

  const cambiar=(i) => {
    //
    if (i.target.src.includes('rey2')) {
      i.target.src=rey
    }else {
      i.target.src=rey2
    }
  }

  const texto=(e) => {
    refApp.current.innerHTML = e.target.value
  }


  return (
    <>
      <div className="App" onClick={incremantar} ref={refApp}>1</div>
      <button onClick={combertir}>Aceptar</button>
      <br />

      <input type="text" className='campo' onChange={texto}  />

      <div className="">
        <img src={rey} onClick={cambiar} />
      </div>
    </>
  )
}

export default App
