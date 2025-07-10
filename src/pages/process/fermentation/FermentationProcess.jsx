import React from 'react';
import './FermentationProcess.css';
import img1 from '../../../assets/images/products-section-foods.webp';
import img2 from '../../../assets/images/products-section-foods.webp';
import img3 from '../../../assets/images/products-section-foods.webp';
import img4 from '../../../assets/images/products-section-foods.webp';

const FermentationProcess = () => {
  return (
    <section className="fermentation-section">
      <div className="fermentation-text">
        <h4 className="section-label">THE ART OF FERMENTATION</h4>
        <h1 className="main-heading">
          Fermentation is a process that has been used by humans for thousands of years to create food and beverages.
        </h1>
        <div className="text-columns">
          <p>
            The earliest evidence of fermented products dates back to ancient civilizations such as the Sumerians,
            who brewed beer as early as 6000 BC. Fermentation was also used by the Egyptians to make bread and by the Chinese
            to make soy sauce and other fermented foods. In Europe, fermentation played a crucial role in the production of wine,
            cheese, and other dairy products.
          </p>
          <p>
            The understanding of the science behind fermentation has greatly advanced over time. Today, fermentation is still used
            to create a wide range of foods and beverages, and continues to be an important part of human culture and history.
          </p>
        </div>
      </div>

      <div className="fermentation-images">
        <img src={img1} alt="Industrial fermentation tank" />
        <img src={img2} alt="Fermentation jar 1" />
        <img src={img3} alt="Fermentation jar 2" />
        <img src={img4} alt="Fermentation jar 3" />
      </div>

      <div className="fermentation-paragraphs">
        <p>
          By harnessing the power of microorganisms to convert CO2 and green Hydrogen into high-quality proteins, we’re able to provide
          a more sustainable and efficient alternative to traditional protein sources. We’re proud to continue the legacy of fermentation
          in human culture while pushing the boundaries of innovation to address the challenges of the 21st century.
        </p>
        <p>
          Fermentation is not only a fascinating part of human history, but it also offers a sustainable solution to modern-day
          challenges in food production. At our company, we utilize fermentation technology to create sustainable proteins that meet
          the highest standards of quality and environmental responsibility.
        </p>
      </div>
    </section>
  );
};

export default FermentationProcess;
