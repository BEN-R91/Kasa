import './index.css';
import { useEffect, useRef } from 'react';

export const Carrousel = ({logement}) => {  
    const carousel = useRef(null);
    const prevBtn = useRef(null);
    const nextBtn = useRef(null);

    const scrollOneSlide = (direction) => {
        const slideWidth = carousel.current.clientWidth;
        
        carousel.current.scrollBy({ 
            left: direction * slideWidth, 
            behavior: 'smooth' 
        });
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') scrollOneSlide(1);
            if (e.key === 'ArrowLeft') scrollOneSlide(-1);
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="carrousel">
            <button ref={prevBtn} onClick={()=>scrollOneSlide(-1)}>
                <svg viewBox="0 0 47 80">
                    <path d="M0 72.12L7.08 79.2L46.68 39.6L7.08 0L0 7.08L32.52 39.6L0 72.12Z"/>
                </svg>
            </button>
            <ul ref={carousel}>
                {logement.pictures.map((picture, index) => (
                    <li key={index}>
                        <img src={picture} alt="" />
                    </li>
                ))}
            </ul>
            <button ref={nextBtn} onClick={()=>scrollOneSlide(1)}>
                <svg viewBox="0 0 47 80">
                    <path d="M0 72.12L7.08 79.2L46.68 39.6L7.08 0L0 7.08L32.52 39.6L0 72.12Z"/>
                </svg>
            </button>
        </div>
    );
};