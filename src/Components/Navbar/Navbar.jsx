import React from 'react'
import './Navbar.css';

// Image
import profile from '../../assets/pr.jfif'

const Navbar = () => {
  return (
    <div className="navigation-container">
    <div className='navigation'>
        
        <div className="logo">
            <h1>RegalTrendZ</h1>
        </div>
        <div className="admin_profile">
            <div className="avatar">
                <img src={profile} alt="" />
            </div>
            <div className="avatar_details">
                <p>Adam Adkins</p>
                <p>adam@gmail.com</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar
