import React from 'react'
import './AdminLayout.css';
import Navbar from '../../Components/Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import Sidebar from '../../Components/Sidebar/Sidebar';

const AdminLayout = () => {
  return (
    <div className='layout-maincontainer'> 
      <div className="layout-Navigation">
        <Navbar/>
      </div>
      <div className="layout-main-content">
        <div className="layout-navigation">
            <Sidebar/>
        </div>
        <div className="layout-main-pages">
            <Dashboard/>       
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
