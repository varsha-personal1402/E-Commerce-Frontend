import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";

function UserDashboard() {
  const navigate = useNavigate();

  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  // 🔹 Load data from localStorage
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];

    setUser(loggedUser);
    setOrders(storedOrders);
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2 className="sidebar-logo">ShopHub</h2>

        <nav className="sidebar-nav">
          <button
            className={active === "dashboard" ? "active" : ""}
            onClick={() => setActive("dashboard")}
          >
            Dashboard
          </button>

          <button
            className={active === "orders" ? "active" : ""}
            onClick={() => setActive("orders")}
          >
            Orders
          </button>

          <button
            className={active === "profile" ? "active" : ""}
            onClick={() => setActive("profile")}
          >
            Profile
          </button>

          <button
            className={active === "settings" ? "active" : ""}
            onClick={() => setActive("settings")}
          >
            Settings
          </button>

          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </nav>

        <div
          className="sidebar-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "←" : "→"}
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* DASHBOARD */}
        {active === "dashboard" && (
          <>
            <h1>Dashboard</h1>
            <p>Welcome back, {user?.name} 👋</p>
          </>
        )}

        {/* ORDERS */}
        {active === "orders" && (
          <>
            <h1>My Orders</h1>

            {orders.length === 0 ? (
              <p>No orders found.</p>
            ) : (
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.name}</td>
                      <td>{order.quantity}</td>
                      <td>{order.date}</td>
                      <td>{order.status}</td>
                      <td>₹{order.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}

        {/* PROFILE */}
        {active === "profile" && (
          <>
            <h1>Profile</h1>
            <p>
              <strong>Name:</strong> {user?.name}
            </p>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
          </>
        )}

        {/* SETTINGS */}
        {active === "settings" && (
          <>
            <h1>Settings</h1>
            <p>Account settings coming soon…</p>
          </>
        )}
      </main>
    </div>
  );
}

export default UserDashboard;
