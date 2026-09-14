import { useEffect, useState } from "react";
import { getAllUsers, deleteUser } from "../../../Services/api";

const DashboardUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getAllUsers();
      setUsers(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (userId, name) => {
    const confirmed = window.confirm(
      `Delete user "${name}"? This cannot be undone.`,
    );
    if (!confirmed) return;

    try {
      await deleteUser(userId);
      setUsers((prev) => prev.filter((u) => u._id !== userId));
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete user.");
    }
  };

  if (loading) return <div className="dashboard-loading">Loading users...</div>;

  return (
    <div className="dashboard-users">
      <h1 className="dashboard-heading">Users ({users.length})</h1>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Joined</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <span
                  className={`role-badge ${u.role === "Admin" ? "admin" : ""}`}
                >
                  {u.role}
                </span>
              </td>
              <td>{new Date(u.createdAt).toLocaleDateString()}</td>
              <td>
                {u.role !== "Admin" && (
                  <button
                    className="table-delete-btn"
                    onClick={() => handleDelete(u._id, u.name)}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardUsers;
