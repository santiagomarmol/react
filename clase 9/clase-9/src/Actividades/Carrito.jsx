import React, { useReducer, useRef, useState } from 'react'
const types = {
    menos: 'menos',
    mas: 'mas',
    eliminar: 'eliminar',
    comprar: 'comprar'
}
const valorInicial = []
const reducer = (state, action) => {
    switch (action.type) {
        case types.menos:
            return state.map(item => (action.payload === item.id && item.cantidad > 1) ? { ...item, cantidad: item.cantidad - 1 } : item);

        case types.mas:
            return state.map(item => (action.payload === item.id) ? { ...item, cantidad: item.cantidad + 1 } : item);
        case types.eliminar:
            return state.filter(item => item.id !== action.payload);

        case types.comprar:
            return [...state, action.payload]
        default:
            return state;
    }
    return state
}
function Carrito() {
    const [lista, dispatch] = useReducer(reducer, valorInicial)
    const inputNme = useRef(null)
    const [producto, setProducto] = useState('')
    return (
        <div>
            <h1>productos</h1>

            <div className="btn">

                <input type="text" placeholder='Agregar Producto' value={producto} onChange={(e) => setProducto(e.target.value)} ref={inputNme} />
                <button onClick={() =>{
                    inputNme.current.focus()
                    setProducto('')
                    dispatch({ type: types.comprar, payload:{id:Date.now() , nombre:producto , cantidad:1} })}}>Agregar</button>

            </div>

            <div className="lista">

                <h2> {lista.map((productos) =>

                    <ul key={productos.id}>
                        <li>{productos.nombre} ({productos.cantidad} unidades)
                            <button onClick={() => dispatch({ type: types.menos, payload: productos.id })}>-</button>
                            <button onClick={() => dispatch({ type: types.mas, payload: productos.id })}>+</button>
                            <button onClick={() => dispatch({ type: types.eliminar, payload: productos.id })}>Eliminar</button>
                        </li>
                    </ul>

                )} </h2>

            </div>

        </div>
    )
}

export default Carrito