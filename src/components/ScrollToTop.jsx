import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls window to top on every route/page change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
