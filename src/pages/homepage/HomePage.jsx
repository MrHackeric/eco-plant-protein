import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button from '../../components/common/Button';
import ProductCard from '../../components/common/ProductCard';
import SpaIcon from '@mui/icons-material/Spa';
import RecyclingIcon from '@mui/icons-material/Recycling';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import SendIcon from '@mui/icons-material/Send';
import './HomePage.css';

const HomePage = () => {
  const products = [
    {
      id: 1,
      name: "Plant Protein Blend",
      description: "Complete amino acid profile from organic peas, rice and hemp",
      price: 29.99,
      isNew: true
    },
    {
      id: 2,
      name: "Superfood Greens",
      description: "Nutrient-dense greens powder with spirulina and chlorella",
      price: 24.99,
      isNew: false
    },
    {
      id: 3,
      name: "Eco Protein Bars",
      description: "Plant-based protein bars in compostable packaging",
      price: 19.99,
      isNew: true
    }
  ];

  return (
    <div className="homepage">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Plant-Powered Nutrition for a Sustainable Future</h1>
              <p className="subtitle">
                Premium plant proteins with regenerative farming practices for maximum nutrition and minimum environmental impact.
              </p>
              <div className="hero-actions">
                <Button variant="primary">Shop Products</Button>
                <Button variant="secondary">Learn More</Button>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-mock"></div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values">
          <div className="container">
            <h2>Our Sustainable Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <SpaIcon className="value-icon" fontSize="large" />
                <h3>Regenerative Farming</h3>
                <p>We partner with farms that restore ecosystems while growing our ingredients.</p>
              </div>
              <div className="value-card">
                <RecyclingIcon className="value-icon" fontSize="large" />
                <h3>Zero Waste</h3>
                <p>Compostable packaging and 98% production efficiency minimize waste.</p>
              </div>
              <div className="value-card">
                <SolarPowerIcon className="value-icon" fontSize="large" />
                <h3>Renewable Energy</h3>
                <p>Our facilities run on 100% renewable solar and wind power.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="products" id="products">
          <div className="container">
            <div className="section-header">
              <h2>Our Products</h2>
              <p className="section-subtitle">Clean, sustainable nutrition for every need</p>
            </div>
            <div className="products-grid">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process" id="process">
          <div className="container">
            <div className="process-content">
              <h2>From Seed to Scoop</h2>
              <p>
                Our transparent supply chain ensures ethical sourcing and maximum nutrient retention. 
                We cold-process our proteins to preserve amino acids and enzymes.
              </p>
              <Button variant="outline">Our Process</Button>
            </div>
            <div className="process-image">
              <div className="image-mock"></div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="newsletter">
          <div className="container">
            <div className="newsletter-content">
              <h2>Join Our Sustainable Community</h2>
              <p>Get 15% off your first order and receive eco-friendly nutrition tips</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" required />
                <Button type="submit" variant="primary">
                  Subscribe <SendIcon fontSize="small" />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;