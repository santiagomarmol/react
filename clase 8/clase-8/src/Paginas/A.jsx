import React from 'react'
import { Link } from 'react-router-dom'

function A() {
    return (
        <div>

            <h1>Pagina 1</h1>
            <p>
                <Link to={'/Pagina2'}>Pagina2</Link>
            </p>

            <p>
                <Link to={'/pagina3'}>Pagina3</Link>
            </p>
        </div>

    )
}

export default A