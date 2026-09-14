import { useState } from "react";
import { useCart } from "../../../Context/cartContext";
import "./style.css";
import { useNavigate } from "react-router-dom";
import useIsMobileView from "../../../CustomHooks/isMobileView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartUI = () => {
  const { cartItems, loading, increment, decrement, removeItem, cartTotal } =
    useCart();
  const [expandedId, setExpandedId] = useState(null); 
  const Navigate = useNavigate();
  const isMobile = useIsMobileView(750);

  if (loading) return <div className="cart-loading">Loading your cart...</div>;

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id)); 
  };

  return (
    <div className="cart-root">
      <h1 className="cart-heading">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => {
              const isExpanded = expandedId === item._id;

              return (
                <div
                  key={item._id}
                  className={`cart-row ${isExpanded ? "expanded" : ""}`}
                >
                  <div
                    className="cart-row-main"
                    onClick={() => toggleExpand(item._id)}
                  >
                    <div
                      className="cart-row-image"
                      style={{ backgroundImage: `url("${item.image}")` }}
                    ></div>

                    {isMobile ? (
                      <div className="cart-row-wrapper">
                        <div className="cart-row-name">{item.title}</div>

                        <div className="cart-row-button-wrapper">
                          <div
                            className="cart-row-qty"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              onClick={() => decrement(item._id, item.quantity)}
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => increment(item._id, item.quantity)}
                            >
                              +
                            </button>
                          </div>

                          <button
                            className="cart-row-remove"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeItem(item._id);
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="cart-row-trash"
                            />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="cart-row-name">{item.title}</div>

                        <div
                          className="cart-row-qty"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            onClick={() => decrement(item._id, item.quantity)}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => increment(item._id, item.quantity)}
                          >
                            +
                          </button>
                        </div>

                        <button
                          className="cart-row-remove"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeItem(item._id);
                          }}
                        >
                          Remove
                        </button>
                      </>
                    )}
                  </div>

                  <div className="cart-row-details">
                    <div className="cart-row-details-inner">
                      <div
                        className="cart-row-image-large"
                        style={{ backgroundImage: `url("${item.image}")` }}
                      ></div>
                      <div className="cart-row-details-text">
                        <h3>{item.title}</h3>
                        <p className="cart-row-company">{item.company}</p>
                        <p className="cart-row-description">
                          {item.description}
                        </p>
                        <p className="cart-row-price">
                          ₹{item.price.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cart-footer">
            <div className="cart-total">
              Total: ₹{cartTotal.toLocaleString("en-IN")}
            </div>
            <button
              className="cart-checkout"
              onClick={() => Navigate("/Checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartUI;
