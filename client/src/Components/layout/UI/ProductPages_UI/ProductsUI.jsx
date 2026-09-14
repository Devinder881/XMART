import "./style.css";
import useProductsData from "../../../../Services/productsDataRequest";
import { useCart } from "../../../Context/cartContext";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Product_UI_Model from "./Product_Modal_UI/ProductModalUI";

export default function Products_UI({
  pageCategory = null,
  searchTerm = null,
}) {
  const { productsData, loading } = useProductsData();
  const { addToCart } = useCart();
  const [addedProduct, setAddedProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null); 

  if (!productsData || productsData.length === 0) return null;

  const displayProducts = pageCategory
    ? productsData.filter((product) => product.category === pageCategory)
    : productsData;

  const finalProducts = searchTerm
    ? [...displayProducts].sort((a, b) => {
        const scoreOf = (p) => {
          const title = p.title?.toLowerCase() || "";
          const term = searchTerm.toLowerCase();
          if (title === term) return 100;
          if (title.startsWith(term)) return 75;
          if (title.includes(term)) return 50;
          return 0;
        };
        return scoreOf(b) - scoreOf(a);
      })
    : displayProducts;

  const handleAddToCart = async (productID) => {
    try {
      await addToCart(productID);
      setAddedProduct(productID);
      setTimeout(() => setAddedProduct(null), 1500);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="Products-root">
      {loading ? (
        <div className="loadingContainer">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="ProductsConatiner">
          {finalProducts.map((product, index) => (
            <div
              key={product._id ?? index}
              className="Product-block"
              onClick={() => setSelectedProduct(product)} 
            >
              <div
                className="Product-image"
                style={{ backgroundImage: `url("${product.image}")` }}
              ></div>
              <div className="Product-details-section">
                <div className="Product-title">{product.title}</div>
                <h2 className="Product-company">{product.company}</h2>
                <p className="Product-description">{product.description}</p>
                <h3 className="Product-price">
                  ₹{product.price.toLocaleString("en-IN")}
                </h3>
                <motion.button
                  className="cartButtonOuter"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleAddToCart(product._id);
                  }}
                  whileTap={{ scale: 0.95 }}
                  disabled={addedProduct === product._id}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {addedProduct === product._id ? (
                      <motion.span
                        key="added"
                        className="cartButton"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.1 }}
                      >
                        ✓ Added
                      </motion.span>
                    ) : (
                      <motion.span
                        key="add"
                        className="cartButton"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        Add to Cart
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Product_UI_Model
        isOpen={selectedProduct !== null}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
