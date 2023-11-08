import React from 'react'

function Componente({rey , reses , vivo}) {
    return (
        <div>
            <h1>El Rey {rey} Come {reses} Vacas  Al Dia</h1>
        </div>
    )
}

Componente.defaultProps={
    rey:'Darwin',
    reses:'Pocas'
}

export default Componente