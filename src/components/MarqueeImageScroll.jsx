import gsap from "gsap";
import React, { useLayoutEffect, useMemo, useRef } from "react";

const images = [
  "/stock1.jpg",
  "/stock2.jpg",
  "/stock3.jpg",
  "/stock1.jpg",
  "/stock2.jpg",
  "/stock3.jpg",
];
const MarqueeImageScroll = ({ isReversed, containerClass }) => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
      const container = containerRef.current;
  
      // Duplicate items must be appended once for seamless wrap
      const items = container.querySelectorAll('.marquee-item');
      const containerWidth = container.scrollWidth / 2;

    //   gsap.to(container , {
    //     x: `-= ${containerWidth}` 
    //   })
  
      gsap.to(container, {
        x: `-=${containerWidth}`,
        duration: 15,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % containerWidth),
        },
      });
    }, []);
  
    return (
      <div className="overflow-hidden w-full py-4">
        <div
          className="flex w-max gap-8 pt-20"
          ref={containerRef}
        >
          {/* Repeat images twice for infinite loop */}
          {[...images, ...images].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`img-${i}`}
              className="marquee-item rounded-3xl max-h-64 w-auto object-contain"
            />
          ))}
          {[...images, ...images].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`img-${i}`}
              className="marquee-item rounded-3xl max-h-64 w-auto object-contain"
            />
          ))}
        </div>
        
      </div>
    );
};

export default MarqueeImageScroll;
