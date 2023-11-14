import React, { useState } from 'react'

const initialCart = [
  { id: 1, name: "Apple", price: 0.99 },
  { id: 2, name: "Orange", price: 0.65 }
]
function ShoppingCart() {
  const [cart, setCart] = useState(initialCart)
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const deleteProduct = (idProduct) => {

    const changeCart = cart.filter((product) => product.id !== idProduct)
    setCart(changeCart)
  }
  const addProduct = () => {
    if (!name || !price) {
      alert('Todos Los campos Son Obligatorios')
      return;
    }
    setCart([...cart, { id: cart.length + 1, name: name, price: parseFloat(price) }]);
    setName("")
    setPrice("")
  }
  return (
    <>
      <div className="inputs">
        <input type="text" placeholder='Nombre del producto' value={name}
          onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Precio del producto' value={price}
          onChange={(e) => setPrice(e.target.value)} />
        <button className='Create' onClick={addProduct}>Agregar</button>
      </div>
      <div className='container_cards'>
        {cart.map(product =>
          <div key={product.id} className='card'>
            <h3>{product.name}</h3>
            <p><b>Price :</b>${product.price}</p>
            <button onClick={() => deleteProduct(product.id)} className='Delete'>Delete</button>
          </div>
        )}
      </div>
    </>
  )
}

export default ShoppingCart