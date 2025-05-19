import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const images = [
  "/stock1.jpg",
  "/stock2.jpg",
  "/stock3.jpg",
  "/stock1.jpg",
  "/stock2.jpg",
  "/stock3.jpg",
];

const MarqueeImageScroll = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const containerWidth = container.scrollWidth / 2;

    animationRef.current = gsap.to(container, {
      x: `-=${containerWidth}`,
      duration: 24,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % containerWidth),
      },
    });
  }, []);

  const handleMouseEnter = () => {
    animationRef.current?.pause();
  };

  const handleMouseLeave = () => {
    animationRef.current?.resume();
  };

  // Double the images just once for seamless looping
  const repeatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden w-full py-4">
      <div
        className="flex w-max gap-8 pt-20"
        ref={containerRef}
      >
        {repeatedImages.map((src, i) => (
          <div
            key={i}
            className="marquee-item rounded-3xl max-h-64 w-auto object-contain"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={src}
              alt={`img-${i}`}
              className="rounded-3xl max-h-64 w-auto object-contain"
            />
          </div>
        ))}
        {repeatedImages.map((src, i) => (
          <div
            key={i}
            className="marquee-item rounded-3xl max-h-64 w-auto object-contain"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={src}
              alt={`img-${i}`}
              className="rounded-3xl max-h-64 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeImageScroll;
