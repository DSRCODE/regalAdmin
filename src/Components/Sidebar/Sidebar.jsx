import "./Sidebar.css"
import { MdDashboard } from "react-icons/md";
import { FaUser ,FaAngleDown} from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { MdCategory } from "react-icons/md";
import {useSpring,animated} from "@react-spring/web"
import { useState } from "react";

const Sidebar = () => {
 const [isToggel , setToggel]= useState(false);
 const fade= useSpring({
    opacity: isToggel ?1:0,
     
 });

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
                <div className="sidebar-element " onClick={()=> setToggel(!isToggel)} >
                    <span><MdCategory /></span>
                    <h3 className="cat">Product </h3>
                    <span style={{ color: "#5c5a5a" }}><FaAngleDown /></span>
                </div>
                <animated.div style={fade} className="category-bar" >
                    <ul><li>Men's</li>
                        <li>Women's</li>
                        <li>Kid's</li>
                        <li>Others</li>
                    </ul>
                </animated.div>

                <div className="sidebar-element">
                    <span><FaUser /></span>
                    <h3>Customer</h3>
                </div>
                <div className="sidebar-element">
                    <span><IoSettings /></span>
                    <h3>Settings</h3>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
