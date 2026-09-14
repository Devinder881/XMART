import { useState, useEffect } from "react";

const useIsMobileView = (breakpoint = 1050) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= breakpoint);

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobileView;

//This Custom Hook will Help to track the Windows-Width and Change the State Variable in Boolean Accordingly .
