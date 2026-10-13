import { useState, useEffect, useCallback, useRef } from "react";
import CarouselProps from "./types";

const Carousel = <T,>({
  id,
  data,
  template,
  autoPlay = false,
  controls = false,
  interval = 3000,
}: CarouselProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const items = [data[data.length - 1], ...data, data[0]];

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }, [isTransitioning]);

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoPlay) {
      timer = setInterval(nextSlide, interval);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [autoPlay, interval, nextSlide]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      if (currentIndex === 0) {
        setCurrentIndex(data.length);
        wrapperRef.current!.style.transition = "none";
        wrapperRef.current!.style.transform = `translateX(-${data.length * 100}%)`;
      } else if (currentIndex === data.length + 1) {
        setCurrentIndex(1);
        wrapperRef.current!.style.transition = "none";
        wrapperRef.current!.style.transform = `translateX(-100%)`;
      }
    };

    const wrapperElement = wrapperRef.current;
    if (wrapperElement) {
      wrapperElement.addEventListener("transitionend", handleTransitionEnd);
    }

    return () => {
      if (wrapperElement) {
        wrapperElement.removeEventListener(
          "transitionend",
          handleTransitionEnd,
        );
      }
    };
  }, [currentIndex, data.length]);

  useEffect(() => {
    if (!isTransitioning && wrapperRef.current) {
      wrapperRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [isTransitioning]);

  return (
    <div id={id} className="carousel">
      <div
        ref={wrapperRef}
        className="carousel__wrapper"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel__item">
            {template(item)}
          </div>
        ))}
      </div>
      {controls && (
        <>
          <button
            className="carousel__button carousel__button--left"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="carousel__button carousel__button--right"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
