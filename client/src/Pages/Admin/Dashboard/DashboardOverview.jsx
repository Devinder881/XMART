import { useEffect, useState } from "react";
import { getAllUsers, getProducts } from "../../../Services/api";

const DashboardOverview = () => {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersRes, productsRes] = await Promise.all([
          getAllUsers(),
          getProducts(),
        ]);
        setUserCount(usersRes.data.length);
        setProductCount(productsRes.data.data.length);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading)
    return <div className="dashboard-loading">Loading overview...</div>;

  return (
    <div className="dashboard-overview">
      <h1 className="dashboard-heading">Overview</h1>
      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-number">{userCount}</div>
          <div className="stat-label">Total Users</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{productCount}</div>
          <div className="stat-label">Total Products</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
