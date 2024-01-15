import "./Sidebar.css"
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { MdCategory } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import {Link} from "react-router-dom"

const Sidebar = () => {
    return (
        <div>
            <div className="Sidebar-container">
                <div className="sidebar-element">
                    <span><MdDashboard /></span>
                    <h3>Dashboard</h3>
                </div>
                <div className="sidebar-element">
                    <span><LuShoppingBag /></span>
                    <h3>Order</h3>
                </div>
                <div className="sidebar-element "  >
                    <span><MdCategory /></span>
                    <h3 className="cat">Product </h3>
    
                </div>              

                <div className="sidebar-element">
                    <span><FaUser /></span>
                    <h3>Customer</h3>
                </div>
                <div className="sidebar-element">
                    <span><IoSettings /></span>
                    <h3>Settings</h3>
                </div>
                <div className="sidebar-element">
                    <span><CiLogout /></span>
                    <h3><Link to={"/login"} style={{ textDecoration: "none", color:"rgba(0, 0, 0, 0.619)"}} >Logout</Link></h3>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
