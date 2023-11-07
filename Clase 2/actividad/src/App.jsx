
import img0 from './assets/images/rey1.png'
import img1 from './assets/images/rey2.png'
import img2 from './assets/images/incognito.png'

import './App.css'

function App() {
  const name = ['atanagildo', 'leaogivildo', 'sisebuto']
  const cambiarImg= (e) =>{
    if (e.target.src.includes('img2') ) {
      e.target.src = ""
    }else{
      e.target.src=img2
    }
    e.target.parentNode.style.backgroundColor = '#fff'
  }

  const cambiartexto = (e)=>{
    if (e.target.innerHTML=='visto') {
      e.target.innerHTML = ""
    }else{
      e.target.innerHTML = 'visto'
    }
  }



  return (

    <div className='App'>
      <div className="card">
        <img src={img0} alt="" onClick={cambiarImg} />
        <p onClick={cambiartexto}>{name[0]}</p>
      </div>

      <div className="card">
        <img src={img1} alt="" onClick={cambiarImg} />
        <p onClick={cambiartexto}>{name[1]}</p>
      </div>
    </div>

  )
}

export default App
