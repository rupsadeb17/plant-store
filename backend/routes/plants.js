const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');

// GET all plants with optional search and filter
router.get('/', async (req, res) => {
  try {
    const { search, category } = req.query;
    let query = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { categories: { $regex: search, $options: 'i' } }
      ];
    }

    if (category && category !== 'all') {
      query.categories = { $in: [category] };
    }

    const plants = await Plant.find(query);
    res.json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single plant by ID
router.get('/:id', async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) {
      return res.status(404).json({ message: 'Plant not found' });
    }
    res.json(plant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create a new plant
router.post('/', async (req, res) => {
  try {
    const { name, price, categories, inStock, imageUrl } = req.body;

    // Validation
    if (!name || !price || !categories || categories.length === 0) {
      return res.status(400).json({ message: 'Name, price, and at least one category are required' });
    }

    const plant = new Plant({
      name,
      price,
      categories: Array.isArray(categories) ? categories : [categories],
      inStock: inStock !== undefined ? inStock : true,
      imageUrl: imageUrl || ''
    });

    const newPlant = await plant.save();
    res.status(201).json(newPlant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;