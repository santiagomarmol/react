import React from 'react'
import { useParams } from 'react-router-dom'


function D() {
    const params = useParams();

    return (
        <div>

            <h1>Pagina D</h1>
            <p>
                Params: {params.letra}
            </p>

        </div>


    )
}

export default D