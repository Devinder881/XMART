import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "../../../Services/api";

const DashboardEditProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    description: "",
    price: "",
    category: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [existingImages, setExistingImages] = useState([]);
  const [clearGallery, setClearGallery] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(productId);
        const product = response.data.product ?? response.data;
        setFormData({
          title: product.title,
          company: product.company,
          description: product.description,
          price: product.price,
          category: product.category,
        });

        setPreviewUrl(product.image);
        setExistingImages(product.images || []);
      } catch (err) {
        console.error(err?.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 4);
    setGalleryFiles(files);
    setGalleryPreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) =>
        data.append(key, value),
      );
      if (imageFile) data.append("image", imageFile);

      if (galleryFiles.length > 0) {
        galleryFiles.forEach((file) => data.append("images", file));
      } else if (clearGallery) {
        data.append("clearImages", "true");
      }

      await updateProduct(productId, data);
      setMessage("✅ Product updated successfully.");
      setTimeout(() => navigate("/Dashboard/Products/Manage"), 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to update product.");
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return <div className="dashboard-loading">Loading product...</div>;

  return (
    <div className="dashboard-add-product">
      <h1 className="dashboard-heading">Edit Product</h1>

      <form className="dashboard-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>
        <div className="form-group">
          <label>Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Product Image (leave blank to keep current)</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {previewUrl && (
            <img src={previewUrl} alt="Preview" className="image-preview" />
          )}
        </div>

        <div className="form-group">
          <label>Current Gallery Images</label>
          {existingImages.length > 0 ? (
            <div className="gallery-preview-row">
              {existingImages.map((url, i) => (
                <img key={i} src={url} className="gallery-preview-thumb" />
              ))}
            </div>
          ) : (
            <p className="no-gallery-text">No gallery images set.</p>
          )}

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={clearGallery}
              onChange={(e) => setClearGallery(e.target.checked)}
            />
            Clear existing gallery
          </label>

          <label>Replace Gallery Images (optional, up to 4)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleGalleryChange}
          />
        </div>

        {message && <div className="dashboard-form-message">{message}</div>}

        <button
          type="submit"
          className="dashboard-submit-btn"
          disabled={saving}
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default DashboardEditProduct;
