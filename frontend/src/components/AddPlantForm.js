import React, { useState } from 'react';

const AddPlantForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    categories: '',
    inStock: true,
    imageUrl: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Plant name is required';
    if (!formData.price || isNaN(formData.price) || parseFloat(formData.price) <= 0) 
      newErrors.price = 'Valid price is required';
    if (!formData.categories.trim()) newErrors.categories = 'At least one category is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const categoriesArray = formData.categories.split(',').map(cat => cat.trim());
      onSubmit({
        ...formData,
        price: parseFloat(formData.price),
        categories: categoriesArray
      });
      
      // Reset form
      setFormData({
        name: '',
        price: '',
        categories: '',
        inStock: true,
        imageUrl: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-plant-form">
      <h2>Add New Plant</h2>
      
      <div className="form-group">
        <label>Plant Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="error-text">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label>Price:</label>
        <input
          type="number"
          step="0.01"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className={errors.price ? 'error' : ''}
        />
        {errors.price && <span className="error-text">{errors.price}</span>}
      </div>

      <div className="form-group">
        <label>Categories (comma separated):</label>
        <input
          type="text"
          name="categories"
          value={formData.categories}
          onChange={handleChange}
          placeholder="e.g., Indoor, Air Purifying"
          className={errors.categories ? 'error' : ''}
        />
        {errors.categories && <span className="error-text">{errors.categories}</span>}
      </div>

      <div className="form-group checkbox">
        <label>
          <input
            type="checkbox"
            name="inStock"
            checked={formData.inStock}
            onChange={handleChange}
          />
          In Stock
        </label>
      </div>

      <div className="form-group">
        <label>Image URL (optional):</label>
        <input
          type="url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="submit-btn">Add Plant</button>
    </form>
  );
};

export default AddPlantForm;