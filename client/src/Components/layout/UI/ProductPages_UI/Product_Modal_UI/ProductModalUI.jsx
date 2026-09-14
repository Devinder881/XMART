import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import "./productModelUIStyle.css";

export default function Product_UI_Model({ isOpen, onClose, product }) {

  const [activeImage, setActiveImage] = useState(product?.image);

  useEffect(() => {
    setActiveImage(product?.image);
  }, [product]);

  if (!isOpen || !product) return null;

  return createPortal(
    <div className="windowOverlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image-wrapper">
          <div
            className="modal-product-image"
            style={{ backgroundImage: `url("${activeImage}")` }}
          ></div>

          <div className="modal-thumbnail-column">
            {[product.image, ...(product.images ?? [])]
              .slice(0, 5)
              .map((imgUrl, index) => (
                <div
                  key={index}
                  className={`modal-thumbnail ${activeImage === imgUrl ? "active" : ""}`}
                  style={{ backgroundImage: `url("${imgUrl}")` }}
                  onClick={() => setActiveImage(imgUrl)}
                ></div>
              ))}
          </div>
        </div>

        <div className="modal-product-details">
          <h2>{product.title}</h2>
          <h3>{product.company}</h3>
          <p>{product.description}</p>
          <h3>&#8377;{product.price.toLocaleString("en-IN")}</h3>
        </div>
      </div>
    </div>,
    document.body,
  );
}
