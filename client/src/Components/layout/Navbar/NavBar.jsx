import { useEffect, useState, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import useIsMobileView from "../../CustomHooks/isMobileView";
import useWindowScrolled from "../../CustomHooks/isWindowScolled";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "motion/react";
import { useAuth } from "../../Context/AuthContext";
import { useCart } from "../../Context/cartContext";

const Navbar = ({ onLoginClick }) => {
  const Navigate = useNavigate();
  const isMobile = useIsMobileView(1170);
  const scrolled = useWindowScrolled();
  const location = useLocation();

  const navigationLinks = [
    { name: "Home", path: "/", action: () => Navigate("/") },
    {
      name: "Trending",
      path: "/Trending",
      action: () => Navigate("/Trending"),
    },
    {
      name: "Discover",
      path: "/Discover",
      action: () => Navigate("/Discover"),
    },
    {
      name: "Clothing",
      path: "/Clothing",
      action: () => Navigate("/Clothing"),
    },
    {
      name: "Electronics",
      path: "/Electronics",
      action: () => Navigate("/Electronics"),
    },
  ];

  const panelVariants = {
    hidden: {
      x: "100%",
    },

    visible: {
      x: 0,
      transition: {
        duration: 0.35,
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },

    exit: {
      x: "100%",
      transition: {
        when: "afterChildren",
        staggerChildren: 0.08,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 30,
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.1,
      },
    },

    exit: {
      opacity: 0,
      x: 30,
      transition: {
        duration: 0.1,
      },
    },
  };

  // Search Logic

  const [search, setSearch] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    const searchTerm = search.trim().toLowerCase();

    if (!searchTerm) return;

    Navigate(`/Discover?q=${encodeURIComponent(searchTerm)}`);
    setSearchBar(false);
  }

  // search bar and Mobile menu Opening logic .
  const [openMenu, setOpenMenu] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const focusInputRef = useRef(null);
  const navRef = useRef(null);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setSearchBar(false);
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const toggleSearch = () => {
    setSearchBar((prev) => !prev);
    setOpenMenu(false); 
  };

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
    setSearchBar(false);
  };

  const handleLinkClick = (action) => {
    action();
    setOpenMenu(false);
    setSearchBar(false);
  };

  useEffect(() => {
    if (scrolled) setSearchBar(false);
  }, [scrolled]);

  useEffect(() => {
    if (searchBar) {
      setTimeout(() => focusInputRef.current?.focus(), 50);
    }
  }, [searchBar]);

  // Cart Context 

  const { cartCount } = useCart();

  const openCart = () => {
    user ? Navigate("/Cart") : onLoginClick();
  };

  return (
    <>
      <nav className={`nav-root ${scrolled ? "Scrolled" : ""}`} ref={navRef}>
        <div className="nav-inner">
          <Link to={"/"} className="nav-logo">
            XMART
          </Link>

          {isMobile ? (
            // Mobile/Tablets 
            <div>
              <div className="mobile-nav-right-option">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="searchIcon-mobile"
                  onClick={toggleSearch}
                  style={{ color: searchBar ? "white" : "orangered" }}
                />
                <button
                  className={`menu-btn ${openMenu ? "clicked" : ""}`}
                  onClick={toggleMenu}
                >
                  <FontAwesomeIcon icon={faBars} className="menu-icon" />
                </button>
              </div>

              <AnimatePresence>
                {openMenu && (
                  <motion.div
                    className="nav-links-mobile"
                    variants={panelVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="mobile-links">
                      <div className="nav-login-mobile-container">
                        {user ? (
                          <motion.div
                            className={`nav-username-mobile ${user.role === "Admin" ? "Admin" : ""}`}
                            onClick={logout}
                            variants={itemVariants}
                          >
                            {user.name}
                          </motion.div>
                        ) : (
                          <motion.div
                            onClick={onLoginClick}
                            className="nav-login-mobile"
                            variants={itemVariants}
                          >
                            Login
                          </motion.div>
                        )}
                      </div>

                      {navigationLinks.map((link) => (
                        <motion.div
                          className={`mobile-link ${location.pathname === link.path ? "active" : ""}`}
                          key={link.name}
                          onClick={() => handleLinkClick(link.action)}
                          variants={itemVariants}
                        >
                          {link.name}
                        </motion.div>
                      ))}

                      <motion.div
                        className="cartIcon-wrapper-mobile"
                        onClick={openCart}
                        variants={itemVariants}
                      >
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          className="cartIcon-mobile"
                        />
                        {cartCount > 0 && (
                          <span className="cart-badge-mobile">{cartCount}</span>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            // Larger Screens
            <div className="nav-links">
              {navigationLinks.map((link) => (
                <div
                  className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                  key={link.name}
                  onClick={() => handleLinkClick(link.action)}
                >
                  {link.name}
                </div>
              ))}

              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="searchIcon"
                onClick={toggleSearch}
              />

              <div className="cartIcon-wrapper" onClick={openCart}>
                <FontAwesomeIcon icon={faCartShopping} className="cartIcon" />
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </div>

              {user ? (
                <div className="nav-user-wrapper">
                  <div
                    className={`nav-username ${user.role === "Admin" ? "Admin" : ""}`}
                    onClick={logout}
                  >
                    {user.name}
                  </div>
                  <span className="username-tooltip">Click to logout</span>
                </div>
              ) : (
                <div onClick={onLoginClick} className="nav-login">
                  Login
                </div>
              )}

              {user?.role === "Admin" && (
                <div
                  onClick={() => Navigate("/Dashboard")}
                  className="nav-dashboard-btn"
                >
                  Dashboard
                </div>
              )}
            </div>
          )}
        </div>

        <form onSubmit={handleSearch}>
          <input
            ref={focusInputRef}
            type="search"
            title="Search"
            id="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`searchbar-root ${searchBar ? "enanble" : ""}`}
            placeholder="Search Products Here....."
            style={{ textTransform: "none" }}
          />
        </form>
      </nav>
    </>
  );
};

export default Navbar;

