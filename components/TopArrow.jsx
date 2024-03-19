import { useEffect, useState } from "react";

const TopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      const shouldBeVisible = scrollY > 100;
      setIsVisible(shouldBeVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return isVisible && (
    <button
      onClick={scrollToTop}
      className="top-arrow bounce"
    >
      <span className="material-symbols-outlined flex">
        arrow_upward
      </span>
    </button>
  );
};

export default TopArrow;
