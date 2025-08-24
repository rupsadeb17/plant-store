import React from 'react';

const PlantCard = ({ plant }) => {
  return (
    <div className="plant-card">
      <img 
        src={plant.imageUrl || '/placeholder-plant.jpg'} 
        alt={plant.name}
        className="plant-image"
      />
      <div className="plant-info">
        <h3>{plant.name}</h3>
        <p className="price">${plant.price.toFixed(2)}</p>
        <div className="categories">
          {plant.categories.map((category, index) => (
            <span key={index} className="category-tag">{category}</span>
          ))}
        </div>
        <p className={plant.inStock ? 'in-stock' : 'out-of-stock'}>
          {plant.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>
    </div>
  );
};

export default PlantCard;