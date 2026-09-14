import "./style.css";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ProductRow_UI({ data, order, type }) {
  const [scrollX, setScrollX] = useState(0);
  const viewportRef = useRef(null);
  const fullWidthRef = useRef(null);
  const scrollAmount = 500;

  const maxScroll = () => {
    const viewport = viewportRef.current;
    const fullwidth = fullWidthRef.current;

    if (!viewport || !fullwidth) return 0;
    return Math.max(fullwidth.scrollWidth - viewport.clientWidth, 0);
  };

  const Right = () => {
    setScrollX((current) => Math.min(current + scrollAmount, maxScroll()));
  };

  const Left = () => {
    setScrollX((current) => Math.max(current - scrollAmount, 0));
  };

  const response = data.find((obj) => obj.order === order && obj.type === type);

  if (!response) return null;

  const res = response.objects;

  return (
    <>
      <div className="productRow-root">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="carouselUIArrow left"
          onClick={Left}
        />

        <div className="productRow-viewport" ref={viewportRef}>
          <div
            className="productsContainer"
            ref={fullWidthRef}
            style={{
              transform: `translateX(-${scrollX}px)`,
              transition: "transform 0.3s ease",
            }}
          >
            {res.map((obj, i) => {
              return (
                <div key={i} className="product">
                  <div
                    className="productRow-image"
                    style={{ backgroundImage: `url("${obj.url}")` }}
                  ></div>
                  <div className="product-company">{obj.company}</div>
                  <div className="product-title-wrapper">
                    <div className="product-title">{obj.title}</div>
                  </div>
                  <div className="product-price">&#8377;{obj.Price}</div>
                  <div className="product-deliveryDate">
                    Get it by <span className="date">{obj.deliveryDate} </span>
                    <br /> Free delivery by Amazon
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <FontAwesomeIcon
          icon={faArrowRight}
          className="carouselUIArrow right"
          onClick={Right}
        />
      </div>
    </>
  );
}
