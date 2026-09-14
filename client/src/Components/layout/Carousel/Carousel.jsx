import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useCarouselMechanics from "../../CustomHooks/carouselMechanics";
import useIsMobileView from "../../CustomHooks/isMobileView";
export default function Carousel() {
  const Banners = [
    {
      id: 1,
      title: "Apple",
      description: "Stands Out in Technology Stand Out in Public",
      image:
        "https://www.deccanchronicle.com/h-upload/2025/01/10/1880313-17.webp",
      link: "https://www.apple.com/in/iphone/",
      color: "#d5cac7",
      txtColor: "000",
    },
    {
      id: 2,
      title: "Samsung",
      description: "Smartest Phones Created with Heart powered by AI.",
      image: "https://m-cdn.phonearena.com/images/hubs/4810-image/Colors.webp",
      link: "https://www.samsung.com/in/smartphones/galaxy-z-fold8/?page=home",
      color: "#ffffff",
      txtColor: "fff",
    },
    {
      id: 3,
      title: "Sony PlayStation 5",
      description: "Transforms The World Around You with Gaming",
      image:
        "https://www.club386.com/wp-content/uploads/2022/07/ps5-696x418.jpg",
      color: "#7f8b97",
      txtColor: "000",
    },
  ];

  const isMobile = useIsMobileView(750);

  const {
    currentBanner,
    Right,
    Left,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    isDragging,
  } = useCarouselMechanics(Banners.length);

  const nextBanner = () => setCurrentBanner((current) => current + 1);
  const previousBanner = () => setCurrentBanner((current) => current - 1);

  return (
    <>
      <div
        className={`carousel-root ${isDragging ? "dragging" : ""}  ${isMobile ? "carousel-root-Mobile" : ""}`}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          className="carouselArrow right"
          onClick={Right}
        />
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="carouselArrow left"
          onClick={Left}
        />

        <div
          className="banner-root"
          style={{ transform: `translateX(-${currentBanner * 100}%)` }}
        >
          {Banners.map((banner) => {
            return (
              <div
                className={`banner ${isMobile ? "bannerMobile" : ""}`}
                key={banner.id}
                style={{ backgroundColor: banner.color }}
              >
                <div
                  className={`imageBanner  ${isMobile ? "imageBannerMobile" : ""}`}
                  style={{ backgroundImage: `url(${banner.image})` }}
                  onClick={() => window.open(banner.link, "_blank")}
                ></div>
                <div
                  className="detailedBanner"
                  style={{
                    backgroundColor: banner.color,
                    color: banner.txtColor,
                  }}
                >
                  <div className="title">{banner.title}</div>
                  <div className="description">{banner.description}</div>
                  <button
                    className="shopLink"
                    style={{ color: banner.color }}
                    onClick={() => window.open(banner.link, "_blank")}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
