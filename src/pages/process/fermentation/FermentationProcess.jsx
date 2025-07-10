import React, { useEffect, useRef, useState } from 'react';
import './FermentationProcess.css';
import img1 from '../../../assets/images/products-section-foods.webp';
import img2 from '../../../assets/images/products-section-foods.webp';
import img3 from '../../../assets/images/products-section-foods.webp';
import img4 from '../../../assets/images/products-section-foods.webp';

const FermentationProcess2 = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  // Add elements to the animation ref array
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Set loaded state after component mounts
    setIsLoaded(true);

    // Only initialize animations if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in2');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      elementsRef.current.forEach((el) => {
        if (el) observer.observe(el);
      });

      return () => {
        elementsRef.current.forEach((el) => {
          if (el) observer.unobserve(el);
        });
      };
    } else {
      // Fallback for browsers without IntersectionObserver
      elementsRef.current.forEach((el) => {
        if (el) el.classList.add('animate-in2');
      });
    }
  }, []);

  return (
    <section 
      className={`fermentation-section2 ${isLoaded ? 'loaded2' : ''}`} 
      ref={sectionRef}
    >
      <div className="fermentation-content2">
        <div className="fermentation-text2">
          <h4 
            className="section-label2" 
            ref={addToRefs}
          >
            THE ART OF FERMENTATION
          </h4>
          
          <h1 
            className="main-heading2" 
            ref={addToRefs}
          >
            Fermentation is a process that has been used by humans for thousands of years to create food and beverages.
          </h1>
          
          <div 
            className="text-columns2" 
            ref={addToRefs}
          >
            <p ref={addToRefs}>
              The earliest evidence of fermented products dates back to ancient civilizations such as the Sumerians,
              who brewed beer as early as 6000 BC. Fermentation was also used by the Egyptians to make bread and by the Chinese
              to make soy sauce and other fermented foods.
            </p>
            <p ref={addToRefs}>
              The understanding of the science behind fermentation has greatly advanced over time. Today, fermentation is still used
              to create a wide range of foods and beverages, and continues to be an important part of human culture and history.
            </p>
          </div>
        </div>

        <div 
          className="fermentation-images2" 
          ref={addToRefs}
        >
          <img 
            src={img1} 
            alt="Industrial fermentation tank" 
            ref={addToRefs}
            className="fermentation-img2"
            loading="lazy"
          />
          <img 
            src={img2} 
            alt="Fermentation jar 1" 
            ref={addToRefs}
            className="fermentation-img2"
            loading="lazy"
          />
          <img 
            src={img3} 
            alt="Fermentation jar 2" 
            ref={addToRefs}
            className="fermentation-img2"
            loading="lazy"
          />
          <img 
            src={img4} 
            alt="Fermentation jar 3" 
            ref={addToRefs}
            className="fermentation-img2"
            loading="lazy"
          />
        </div>

        <div 
          className="fermentation-paragraphs2" 
          ref={addToRefs}
        >
          <p ref={addToRefs}>
            By harnessing the power of microorganisms to convert CO2 and green Hydrogen into high-quality proteins, we're able to provide
            a more sustainable and efficient alternative to traditional protein sources.
          </p>
          <p ref={addToRefs}>
            Fermentation is not only a fascinating part of human history, but it also offers a sustainable solution to modern-day
            challenges in food production.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FermentationProcess2;