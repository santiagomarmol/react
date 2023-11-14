import React, { useState } from 'react'

function ConditionalApp() {
    const [condition, setCondition] = useState(true)


    return (
        // useState con opereradores ternarios
        // <div>
        //     <button onClick={() => setCondition(!condition)}>Toggle</button>
        //     {condition ? <h1>EL ESTADO ES TRUE</h1>: <h1>EL ESTADO ES FALSE</h1>}
        // </div>


        // useState con opererador Diferente
        // <div className="">
        //     <button onClick={() => setCondition(!condition)}>Toggle</button>
        //     {
        //         condition && <h1>EL ESTADO ES TRUE</h1> 
        //     }
            // {
            //  !condition && <h1>EL ESTADO ES FALSE</h1>
            // }
        // </div>
        

        // mostar el valor de un booleano con react
        <div className="">
            <h1> El ESTADO ES {condition.toString()} </h1>        
        </div>

        


    )
}

export default ConditionalApp