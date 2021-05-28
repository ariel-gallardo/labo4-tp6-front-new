import React from 'react'
import {Link} from 'react-router-dom'
import '../css/NavBar.css'

export const NavBar = () =>{ 
    return (<nav className="justify-content-center d-flex container-fluid bg-dark py-lg-2">
        <Link className="p-1" to="/">Home</Link>
        <Link className="p-1" to="/instrumentos">Instrumentos</Link>
        <Link className="p-1" to="/donde">Donde Estamos</Link>
    </nav>)
}