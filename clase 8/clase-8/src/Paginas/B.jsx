import React from 'react'
import { Link } from 'react-router-dom'

function B() {
    return (
        <div>

            <h1>Pagina 2</h1>
            <p>
                <Link to={'/'}>Pagina1</Link>
            </p>

            <p>
                <Link to={'/pagina3'}>Pagina3</Link>
            </p>
        </div>
    )
}

export default B