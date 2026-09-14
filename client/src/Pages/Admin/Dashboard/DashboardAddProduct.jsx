import { useState } from "react";
import { createProduct } from "../../../Services/api";

const DashboardAddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    description: "",
    price: "",
    category: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [galleryPreviews, setGalleryPreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
    setMessage("");

    if (!imageFile) {
      setMessage("Please select an image.");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) =>
        data.append(key, value),
      );
      data.append("image", imageFile);
      galleryFiles.forEach((file) => data.append("images", file));

      await createProduct(data);

      setMessage("Product created successfully.");
      setFormData({
        title: "",
        company: "",
        description: "",
        price: "",
        category: "",
      });

      setImageFile(null);
      setPreviewUrl(null);
      setGalleryFiles([]);
      setGalleryPreviews([]);
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to create product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-add-product">
      <h1 className="dashboard-heading">Add Product</h1>

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
          <label>Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {previewUrl && (
            <img src={previewUrl} alt="Preview" className="image-preview" />
          )}
        </div>

        <div className="form-group">
          <label>Gallery Images (up to 4)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleGalleryChange}
          />
          <div className="gallery-preview-row">
            {galleryPreviews.map((url, i) => (
              <img key={i} src={url} className="gallery-preview-thumb" />
            ))}
          </div>
        </div>

        {message && <div className="dashboard-form-message">{message}</div>}

        <button
          type="submit"
          className="dashboard-submit-btn"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Create Product"}
        </button>
      </form>
    </div>
  );
};

export default DashboardAddProduct;
