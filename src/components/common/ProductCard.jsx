// src/components/common/ProductCard.jsx
import React from 'react';
import Button from './Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {product.isNew && (
        <div className="new-badge">
          <NewReleasesIcon fontSize="small" />
          <span>New</span>
        </div>
      )}
      <div className="product-image">
        {/* Placeholder for product image */}
        <div className="image-mock"></div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <Button variant="outline">
            <AddShoppingCartIcon fontSize="small" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;