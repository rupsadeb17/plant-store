import React, { useState, useEffect } from 'react';
import { plantAPI } from '../services/api';
import PlantCard from '../components/PlantCard';
import SearchAndFilter from '../components/SearchandFilter';
import AddPlantForm from '../components/AddPlantForm';

const Home = () => {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);

  // Get unique categories for filter dropdown
  const categories = [...new Set(plants.flatMap(plant => plant.categories))].sort();

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      setLoading(true);
      const response = await plantAPI.getAll();
      setPlants(response.data);
      setFilteredPlants(response.data);
    } catch (err) {
      setError('Failed to fetch plants. Please try again later.');
      console.error('Error fetching plants:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterPlants(term, selectedCategory);
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
    filterPlants(searchTerm, category);
  };

  const filterPlants = (term, category) => {
    let filtered = plants;
    
    if (term) {
      const lowerTerm = term.toLowerCase();
      filtered = filtered.filter(plant => 
        plant.name.toLowerCase().includes(lowerTerm) ||
        plant.categories.some(cat => cat.toLowerCase().includes(lowerTerm))
      );
    }
    
    if (category && category !== 'all') {
      filtered = filtered.filter(plant => 
        plant.categories.includes(category)
      );
    }
    
    setFilteredPlants(filtered);
  };

  const handleAddPlant = async (plantData) => {
    try {
      await plantAPI.create(plantData);
      setShowAddForm(false);
      fetchPlants(); // Refresh the list
      alert('Plant added successfully!');
    } catch (err) {
      alert('Failed to add plant. Please try again.');
      console.error('Error adding plant:', err);
    }
  };

  if (loading) return <div className="loading">Loading plants...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home-page">
      <header>
        <h1>Urvann Plant Store</h1>
        <button 
          className="add-plant-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : 'Add New Plant'}
        </button>
      </header>

      {showAddForm && (
        <AddPlantForm onSubmit={handleAddPlant} />
      )}

      <SearchAndFilter 
        onSearch={handleSearch}
        onFilter={handleFilter}
        categories={categories}
      />

      <div className="plants-grid">
        {filteredPlants.length > 0 ? (
          filteredPlants.map(plant => (
            <PlantCard key={plant._id} plant={plant} />
          ))
        ) : (
          <p>No plants found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Home;