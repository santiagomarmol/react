import './App.css'
import ApiActividad from './actividades/ApiActividad';

function App() {
  // const [datos, setDatos] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch('https://randomuser.me/api/?results=3')
  //     .then((respuesta) => respuesta.json())
  //     .then((datos) => setDatos(datos.results))
  //     .catch((error) => setError(error));
  // }, []);




  return (
    // <>
    //   <div className="">
    //     {datos?.map((valor) => (
    //       <div className="" key={valor.email}>
    //         <h1>
    //           {valor.name.first} {valor.name.last}
    //         </h1>
    //         <div className="img">
    //           <img src={valor.picture.large} alt="" />
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </>

    <>
     <div className="">
     <ApiActividad/>
     </div>
    </>
  );


}

export default App
