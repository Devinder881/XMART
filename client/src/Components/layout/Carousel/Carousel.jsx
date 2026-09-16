import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useCarouselMechanics from "../../CustomHooks/carouselMechanics";
import useIsMobileView from "../../CustomHooks/isMobileView";
export default function Carousel() {
  const Banners = [
    {
      id: 1,
      title: "Apple Innovation",
      description:
        "Experience refined design, powerful performance, and technology built to elevate everyday life.",
      image:
        "https://www.deccanchronicle.com/h-upload/2025/01/10/1880313-17.webp",
      link: "https://www.apple.com/in/iphone/",
      color: "#d5cac7",
      txtColor: "000",
    },
    {
      id: 2,
      title: "PlayStation 5",
      description:
        "Step into immersive gaming with extraordinary graphics, responsive performance, and next-generation experiences.",
      image:
        "https://www.club386.com/wp-content/uploads/2022/07/ps5-696x418.jpg",
      color: "#7f8b97",
      txtColor: "000",
    },
    {
      id: 3,
      title: "Modern Home Appliances",
      description:
        "Upgrade your home with reliable appliances designed to bring greater convenience, efficiency, and comfort to everyday living.",
      image:
        "https://mastcert.com/wp-content/uploads/2024/09/home-appliances.jpg",
      color: "#fff",
      txtColor: "000",
    },
    {
      id: 4,
      title: "Contemporary Fashion",
      description:
        "Explore versatile styles and modern essentials curated to bring confidence and individuality to every look.",
      image:
        "https://img.magnific.com/free-photo/purchase-sale-discount-fashion-style_53876-15282.jpg?semt=ais_hybrid&w=740&q=80",
      color: "#ffc82c",
      txtColor: "000",
    },
    {
      id: 5,
      title: "Premium Gaming Accessories",
      description:
        "Enhance every gaming session with high-performance accessories designed for precision, comfort, and an immersive experience.",
      image:
        "https://devicerankings.com/wp-content/uploads/2026/03/Premium-Gaming-Accessories-Elevate-Your-Gaming-1068x599.jpg",
      color: "#fa2aaa",
      txtColor: "#000",
    },
    {
      id: 6,
      title: "Samsung Galaxy",
      description:
        "Discover intelligent smartphones combining innovative design, powerful performance, and AI-powered experiences.",
      image: "https://m-cdn.phonearena.com/images/hubs/4810-image/Colors.webp",
      link: "https://www.samsung.com/in/smartphones/galaxy-z-fold8/?page=home",
      color: "#ffffff",
      txtColor: "fff",
    },
    {
      id: 7,
      title: "Luxury Timepieces",
      description:
        "Discover refined watches that bring timeless craftsmanship, sophisticated design, and distinctive character to every occasion.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/070/437/804/small/luxury-men-s-watch-in-black-gift-box-with-black-ribbon-photo.jpg",
      color: "gray",
      txtColor: "#232323",
    },
    {
      id: 8,
      title: "Dell Laptops",
      description:
        "Power your work, creativity, and entertainment with dependable performance and thoughtfully engineered Dell laptops.",
      image: "https://i.ytimg.com/vi/s36QgTn5HRk/sddefault.jpg",
      color: "#1962e1",
      txtColor: "#000",
    },
    {
      id: 9,
      title: "Elevated Footwear",
      description:
        "Complete your occasion-ready look with sophisticated footwear designed to combine distinctive style and lasting comfort.",
      image:
        "https://t4.ftcdn.net/jpg/06/58/07/85/360_F_658078586_j0mXD6y8edHgVMJs5cL1JfLlzTSJ6y6y.jpg",
      color: "#fa9223",
      txtColor: "000",
    },
    {
      id: 10,
      title: "Premium Clothing Collection",
      description:
        "Discover carefully selected fashion pieces that combine contemporary style, quality, and effortless everyday wear.",
      image:
        "https://t4.ftcdn.net/jpg/09/02/29/19/360_F_902291911_uUKr2oOqhi4jcpOGk5o5LrHW6uj8rh8w.jpg",
      color: "#9cf2ee",
      txtColor: "000",
    },

    {
      id: 11,
      title: "Your Electronics Destination",
      description:
        "Shop a wide range of modern electronics and discover technology selected to keep you connected, productive, and entertained.",
      image:
        "https://www.eiosys.com/wp-content/uploads/2021/11/blog-15-Best-Email-Marketing-tools-in-2021.webp",
      color: "#7e45ea",
      txtColor: "000",
    },
    {
      id: 12,
      title: "Reebok Limited Collection",
      description:
        "Step into exclusive Reebok styles crafted to deliver distinctive design, everyday comfort, and a confident finish.",
      image:
        "https://preview.thenewsmarket.com/Previews/RBOK/StillAssets/1920x1080/701461_v3.jpg",
      color: "#f76bc1",
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
