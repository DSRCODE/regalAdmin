import React from "react";
import "./Dashboard.css";
import { Graphs, Graphs2 } from "../../Components/Charts/Graphs";

const Dashboard = () => {
  return (
    <div className="dashboard-main-container">
      <h1>Dashboard</h1>
      <p>Hi, Admin Welcom Back to the Analytical Dashboard</p>
      <div className="dashboard-container">
        <div className="dashborad-details">
          <div className="dasboard-totalUsers">
            <h3>Total Users</h3>
            <div className="users">
              <i class="bi bi-people-fill"></i>
              <p>21546</p>
            </div>
          </div>
          <div className="dasboard-totalProducts">
            <h3>Total Products</h3>
            <div className="products">
              <i class="bi bi-diagram-3-fill"></i>
              <p>21546</p>
            </div>
          </div>
          <div className="dasboard-totalOrders">
            <h3>Total Orders</h3>
            <div className="orders">
              <i class="bi bi-cart-fill"></i>
              <p>21546</p>
            </div>
          </div>
        </div>
        <div className="graph1">
          <Graphs />
        </div>
      </div>
      <div className="dashborad-graph-representation">
        <div className="graph3">
          <Graphs2 />
        </div>
        <div className="graph2">
          <Graphs />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
