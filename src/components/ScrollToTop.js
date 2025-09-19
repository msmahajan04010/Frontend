import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant jump to the top, no animation
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
