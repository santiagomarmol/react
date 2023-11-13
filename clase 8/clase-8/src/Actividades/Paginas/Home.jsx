import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const reyes = ['atanagildo', 'ervigio', 'sisebuto', 'ataulfo', 'leovigildo ', 'recesvinto']
    return (
        <div>
            <h1>Home</h1>

            <div className="reyes">

                {reyes.map(rey => (
                    <Link to={`/reyes/${rey}`}><img src={`https://www.html6.es/img/rey_${rey}.png`} alt="" /></Link>
                    
                    
                    ))
                    
                
                }

            </div>

        </div>
    )
}

export default Home