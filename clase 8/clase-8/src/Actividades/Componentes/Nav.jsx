import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
    return (
        <nav class="menu">
            <ul>
                <li><NavLink to='/' className={(({ isActive }) => (isActive ? 'activado' : null))}>Home</NavLink></li>
                <li><NavLink to='/reyes/atanagildo' className={(({ isActive }) => (isActive ? 'activado' : null))}>Atanagildo</NavLink></li>
                <li><NavLink to='/reyes/ataulfo' className={(({ isActive }) => (isActive ? 'activado' : null))}>Ataulfo</NavLink></li>
                <li><NavLink to='/reyes/ervigio' className={(({ isActive }) => (isActive ? 'activado' : null))}>Ervigio</NavLink></li>
                <li><NavLink to='/reyes/leovigildo' className={(({ isActive }) => (isActive ? 'activado' : null))}>Leovigildo</NavLink></li>
                <li><NavLink to='/reyes/recesvinto' className={(({ isActive }) => (isActive ? 'activado' : null))}>Recesvinto</NavLink></li>
                <li><NavLink to='/reyes/sisebuto' className={(({ isActive }) => (isActive ? 'activado' : null))}>Sisebuto</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav