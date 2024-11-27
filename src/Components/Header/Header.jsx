import React from 'react';
import logo from '../../assets/logo.jpg'
import Cart from '../Cart/Cart'

function Header({ cartCount }) {
    return (
        <header className='my-5'>
            <div className="container">
                <div className="nav d-flex justify-content-between align-items-center">
                    <div className="logo mx-auto">
                        <img src={logo} alt="Logo" />
                    </div>
                    <Cart count={cartCount} />
                </div>
            </div>
        </header>
    );
}

export default Header;