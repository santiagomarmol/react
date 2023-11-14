import React, { useState } from 'react';

const Counter = () => {
 const [count, setCount] = useState(0); // [estado, función para actualizar el estado]

 const increment = () => {
    setCount(count + 1); // actualizar el estado incrementando en 1
 };

 const decrement = () => {
    setCount(count - 1); // actualizar el estado decrementando en 1
 };

 return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
 );
};

export default Counter;