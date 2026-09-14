import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function CarouselRow({ carousel }) {
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

  return (
    <div className="innerCarousel">
      <div className="carousel-title">{carousel.title}</div>

      <div className="carousel-wrapper">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="carouselUIArrow left"
          onClick={Left}
        />

        <div className="carousel-viewport" ref={viewportRef}>
          <div
            className="carousel-images"
            ref={fullWidthRef}
            style={{
              transform: `translateX(-${scrollX}px)`,
              transition: "transform 0.3s ease",
            }}
          >
            {carousel.tiles.map((tile, index) => (
              <div
                key={index}
                className="imagePlates"
                style={{ backgroundImage: `url(${tile.url})` }}
              />
            ))}
          </div>
        </div>

        <FontAwesomeIcon
          icon={faArrowRight}
          className="carouselUIArrow right"
          onClick={Right}
        />
      </div>
    </div>
  );
}
