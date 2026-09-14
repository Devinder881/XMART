import { useState, useEffect } from "react";

const useWindowScrolled = (scrollValue = 0) => {
  const [scrolled, setScrolled] = useState(window.scrollY > scrollValue);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > scrollValue);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollValue]);

  return scrolled;
};

export default useWindowScrolled;
