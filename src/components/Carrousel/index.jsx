import "./index.css";
import { useEffect, useRef, useState } from "react";

export const Carrousel = ({ logement }) => {
  const carousel = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollOneSlide = (direction) => {
    const el = carousel.current;
    if (!el) return;

    const total = logement.pictures.length;
    const slideWidth = el.clientWidth;

    const nextIndex = (index + direction + total) % total; //*************************   JO */

    el.scrollTo({
      left: nextIndex * slideWidth,
      behavior: "smooth",
    });

    setIndex(nextIndex);
  };

  useEffect(() => {
    const el = carousel.current;
    if (!el) return;

    const handleScroll = () => {
      const slideWidth = el.clientWidth;
      const currentIndex = Math.round(el.scrollLeft / slideWidth);
      setIndex(currentIndex);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

    return (
    <div className="carrousel">
      <button onClick={() => scrollOneSlide(-1)} aria-label="Image précédente">
        <svg viewBox="0 0 47 80" aria-hidden="true">
          <path d="M0 72.12L7.08 79.2L46.68 39.6L7.08 0L0 7.08L32.52 39.6L0 72.12Z" />
        </svg>
      </button>

      <ul ref={carousel}>
        {logement.pictures.map((picture, i) => (
          <li key={i}>
            <img src={picture} alt="" />
          </li>
        ))}
      </ul>

      <span className="counter">
        {index + 1} / {logement.pictures.length}
      </span>

      <button onClick={() => scrollOneSlide(1)} aria-label="Image suivante">
        <svg viewBox="0 0 47 80" aria-hidden="true">
          <path d="M0 72.12L7.08 79.2L46.68 39.6L7.08 0L0 7.08L32.52 39.6L0 72.12Z" />
        </svg>
      </button>
    </div>
  );
};
