import React from 'react'
import '../Styles/navbar.css'
import Logo from '.././Assets/logo.png'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className='nav'>
            <div className='nav-logo'>
                <img src={Logo} alt='logo' />
                <div>Codee </div>
            </div>
            <div className='nav-links'>
                <Link className='link' to="/Login">Login</Link> 
                <Link to="/Signup" className='link'>Signup</Link> 
            </div>
        </div>
    )
}

export default Navbar
