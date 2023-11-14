import React, { useState } from 'react'

const inicialProduct = {
    title: 'pera',
    description: 'La pera es una fruta del género Malus, perteneciente a la familia de las rosáceas'

}

function ProductApp() {
    const [product, setProduct] = useState(inicialProduct)
    const updateProduct = () => {
        setProduct({
            ...product,
            title: 'nuevo titulo',
            description: 'la nueva descripcion'
        })
    }
    return (
        <>
            <button onClick={updateProduct}>Actualizar</button>
            <div className="card">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
            </div>

        
        </>

        // <>
        // <div className="">
        // <pre>{JSON.stringify(product, null, 2)}</pre>
        // </div>
        // </>
    )
}

export default ProductApp