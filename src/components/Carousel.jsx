import { useEffect, useState } from 'react';
import './Carousel.css';

function Carousel({ items }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let slideshow = setInterval(next, 3000);
    return () => clearInterval(slideshow);
  }, []);

  function next() {
    setStep((prevStep) => (prevStep === items.length - 1 ? 0 : prevStep + 1));
  }

  function prev() {
    setStep((prevStep) => (prevStep === 0 ? items.length - 1 : prevStep - 1));
  }

  return (
    <div className='Carousel'>
      <div
        className='Carousel-wrapper'
        style={{ transform: `translateX( calc(-1 * ${step} * 100%) )` }}
      >
        {items.map((item) => (
          <div className='Carousel-item'>
            <img
              className='Carousel-image'
              key={item.id}
              src={item.src}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
      <button onClick={prev} aria-label='next slide' className='Carousel-prev'>
        PREV
      </button>
      <button onClick={next} aria-label='prev slide' className='Carousel-next'>
        NEXT
      </button>
      <nav className='Carousel-nav'>
        {items.map((item, index) => (
          <button
            key={`${item.id}-slide-btn`}
            aria-label='go to slide'
            className={`Carousel-navItem ${step === index ? 'active' : ''}`}
            onClick={() => setStep(index)}
          ></button>
        ))}
      </nav>
    </div>
  );
}

export default Carousel;
