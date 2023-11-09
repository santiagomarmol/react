import React from 'react'

function MapComponente() {
  const reyesGodos = [
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
      'vacas': 25,
    }, {
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
      'vacas': 30,
    }, {
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar",
      'vacas': 35
    }
  ]
  //map
  // const variable = reyesGodos.map(valor=>
  //   <div className="" key={valor.nombre}>
  //   <h1 >El rey {valor.nombre} le gusta {valor.aficion}  </h1>
  //   </div>
  //   )

  //filter
  // const variable = reyesGodos.filter(valor=>valor.vacas>=30).map(valor=>
  //   <div className="" key={valor.nombre}>
  //   <h1 >El rey {valor.nombre} le gusta {valor.aficion}  </h1>
  //   </div>
  //   )

  //find
  //const variable = reyesGodos.find(valor => valor.vacas >= 30)

  //include
  const variable = reyesGodos.find(valor => valor.nombre.includes('o'))

  //para convertir string a mayuscula
  //string.toUpperCase()

  return (
    <>
      <div className="" key={variable.nombre}>
        <h1 >El rey {variable.nombre} le gusta {variable.aficion}  </h1>
      </div>

      // <div className=""> {variable} </div>
    </>
  )
}

export default MapComponente