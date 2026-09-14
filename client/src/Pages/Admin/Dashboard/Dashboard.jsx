import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const location = useLocation();
  const isProductsSectionActive = location.pathname.includes(
    "/Dashboard/Products",
  );
  const [productsOpen, setProductsOpen] = useState(isProductsSectionActive);

  return (
    <div className="dashboard-root">
      <aside className="dashboard-sidebar">
        <h2 className="dashboard-logo">XMART Admin</h2>
        <nav className="dashboard-nav">
          <NavLink
            to="/Dashboard"
            end
            className={({ isActive }) =>
              `dashboard-link ${isActive ? "active" : ""}`
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/Dashboard/Users"
            className={({ isActive }) =>
              `dashboard-link ${isActive ? "active" : ""}`
            }
          >
            Users
          </NavLink>

          <div
            className={`dashboard-link dashboard-dropdown-toggle ${isProductsSectionActive ? "active" : ""}`}
            onClick={() => setProductsOpen((prev) => !prev)}
          >
            Products {productsOpen ? "▲" : "▼"}
          </div>

          {productsOpen && (
            <div className="dashboard-submenu">
              <NavLink
                to="/Dashboard/Products/Add"
                className={({ isActive }) =>
                  `dashboard-sublink ${isActive ? "active" : ""}`
                }
              >
                Add Product
              </NavLink>
              <NavLink
                to="/Dashboard/Products/Manage"
                className={({ isActive }) =>
                  `dashboard-sublink ${isActive ? "active" : ""}`
                }
              >
                Manage Products
              </NavLink>
            </div>
          )}
        </nav>
      </aside>

      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
