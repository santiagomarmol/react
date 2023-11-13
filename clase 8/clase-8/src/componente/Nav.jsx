import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
    return (
        <nav class="menu">
            <ul>
                <li><NavLink to='/' className={(({ isActive }) => (isActive ? 'activado' : null))}>Pagina1</NavLink></li>
                <li><NavLink to='/Pagina2' className={(({ isActive }) => (isActive ? 'activado' : null))}>Pagina2</NavLink></li>
                <li><NavLink to='/Pagina3' className={(({ isActive }) => (isActive ? 'activado' : null))}>Pagina3</NavLink></li>

                <li><NavLink to='/Pagina4/g' className={(({ isActive }) => (isActive ? 'activado' : null))}>Pagina4</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav