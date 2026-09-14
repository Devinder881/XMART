import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProductsAdmin, deleteProduct } from "../../../Services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

const DashboardManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getAllProductsAdmin();
      setProducts(response.data);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (productId, title) => {
    const confirmed = window.confirm(
      `Delete "${title}"? This cannot be undone.`,
    );
    if (!confirmed) return;

    try {
      await deleteProduct(productId);
      setProducts((prev) => prev.filter((p) => p._id !== productId));
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete product.");
    }
  };

  if (loading)
    return <div className="dashboard-loading">Loading products...</div>;

  return (
    <div className="dashboard-manage-products">
      <h1 className="dashboard-heading">Manage Products ({products.length})</h1>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Company</th>
            <th>Category</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <div
                  className="table-product-image"
                  style={{ backgroundImage: `url("${product.image}")` }}
                ></div>
              </td>
              <td>{product.title}</td>
              <td>{product.company}</td>
              <td>{product.category}</td>
              <td>{new Date(product.createdAt).toLocaleDateString()}</td>
              <td className="table-actions">
                <FontAwesomeIcon
                  icon={faPen}
                  className="table-icon-edit"
                  onClick={() =>
                    navigate(`/Dashboard/Products/Edit/${product._id}`)
                  }
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="table-icon-delete"
                  onClick={() => handleDelete(product._id, product.title)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardManageProducts;
