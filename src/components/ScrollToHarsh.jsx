import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const element = document.querySelector(hash);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100); // slight delay ensures DOM is ready
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;