import React from 'react'
import { MdDeliveryDining } from 'react-icons/md'

const Header = () => {
  return (
    <header>
        <h1 className="logo">BRUNCHY</h1>
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">About</li>
                <li className="nav-item">Call Us</li>
            </ul>
            <ul className="delivery">
                <li className='delivery-btn'>Free Delivery</li>
                <li className='delivery-icon'> <MdDeliveryDining /></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header