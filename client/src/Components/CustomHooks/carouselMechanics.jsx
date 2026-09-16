import { useEffect, useRef, useState } from "react";

export default function useCarouselMechanics(numberOfBanners) {
  const [currentBanner, setCurrentBanner] = useState(1); // Banner 2
  const [isAutoplay, setIsAutoPlay] = useState(true);
  const autoPlayTimeout = useRef(null);

  const pauseAutoPlay = () => {
    setIsAutoPlay(false);

    autoPlayTimeout.current = setTimeout(() => {
      setIsAutoPlay(true);
    }, 4000);

    return () => clearTimeout(autoPlayTimeout.current);
  };

  const Right = () => {
    pauseAutoPlay();

    setTimeout(() => {
      setCurrentBanner((current) =>
        current >= numberOfBanners - 1 ? 0 : current + 1,
      );
    }, 300);
  };

  const Left = () => {
    pauseAutoPlay();

    setTimeout(() => {
      setCurrentBanner((current) =>
        current <= 0 ? numberOfBanners - 1 : current - 1,
      );
    }, 300);
  };

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      Right();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);

  const handleMouseDown = (e) => {
    if (
      e.target.closest(".carouselArrow") ||
      e.target.closest(".shopLink") ||
      e.target.closest(".imageBanner")
    ) {
      return;
    }

    setIsDragging(true);
    dragStartX.current = e.clientX;
  };

  const finishDrag = (clientX) => {
    if (!isDragging) return;

    setIsDragging(false);

    const dragDistance = clientX - dragStartX.current;
    const threshold = 80;

    if (Math.abs(dragDistance) < threshold) return;

    if (dragDistance < 0) {
      Right();
    } else {
      Left();
    }
  };

  const handleMouseUp = (e) => {
    finishDrag(e.clientX);
  };

  const handleMouseLeave = (e) => {
    finishDrag(e.clientX);
  };

  return {
    currentBanner,
    Right,
    Left,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    isDragging,
  };
}
