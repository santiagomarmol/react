import React from 'react'
import { Link } from 'react-router-dom'

function C() {
    return (
        <div>

            <h1>Pagina 3</h1>
            <p>
                <Link to={'/'}>Pagina1</Link>
            </p>

            <p>
                <Link to={'/pagina2'}>Pagina2</Link>
            </p>
        </div>
    )
}

export default C