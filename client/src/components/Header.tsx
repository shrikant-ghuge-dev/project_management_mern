import React from 'react'
import logo from './../assets/react.svg'

const Header = () => {
    return (
        <nav className="navbar bg-light mb-4 p-2">
            <div className="container">
                <a className='navbar-brand' href="/">
                    <div className="d-flex">
                        <img src={logo} alt="" />
                        <div>Project Management</div>
                    </div>
                </a>
            </div>
        </nav>
    )
}

export default Header