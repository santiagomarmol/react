
import img0 from './assets/images/rey1.png'
import img1 from './assets/images/rey2.png'
import './App.css'

function App() {
  const name = ['atanagildo', 'leaogivildo', 'sisebuto']

  return (

    <div className='App'>
      <div className="card">
        <img src={img0} alt="" />
        <p>{name[0]}</p>
      </div>

      <div className="card">
        <img src={img1} alt="" />
        <p>{name[1]}</p>
      </div>
    </div>

  )
}

export default App
