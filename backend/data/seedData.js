const mongoose = require('mongoose');
const Plant = require('../models/Plant');
require('dotenv').config();
const samplePlants = [
  {
    name: "Snake Plant",
    price: 24.99,
    categories: ["Indoor", "Air Purifying", "Low Maintenance"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Peace Lily",
    price: 32.50,
    categories: ["Indoor", "Air Purifying", "Flowering"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400"
  },
  {
    name: "Rubber Plant",
    price: 45.00,
    categories: ["Indoor", "Home Decor", "Low Maintenance"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1591958915251-6c3bcbb5a5e1?w=400"
  },
  {
    name: "Aloe Vera",
    price: 15.99,
    categories: ["Indoor", "Medicinal", "Succulent"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1525498128493-380d1990a112?w=400"
  },
  {
    name: "Spider Plant",
    price: 18.75,
    categories: ["Indoor", "Air Purifying", "Pet Friendly"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1534295622241-5a7f7d6dba65?w=400"
  },
  {
    name: "Jade Plant",
    price: 22.00,
    categories: ["Indoor", "Succulent", "Low Maintenance"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400"
  },
  {
    name: "Pothos",
    price: 19.99,
    categories: ["Indoor", "Air Purifying", "Hanging"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1598894592035-7ad5d6030325?w=400"
  },
  {
    name: "ZZ Plant",
    price: 35.50,
    categories: ["Indoor", "Low Maintenance", "Drought Tolerant"],
    inStock: false,
    imageUrl: "https://images.unsplash.com/photo-1517191430044-919d660e6c5f?w=400"
  },
  {
    name: "Monstera Deliciosa",
    price: 65.00,
    categories: ["Indoor", "Home Decor", "Tropical"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1597848212624-e9f84d7c5e8c?w=400"
  },
  {
    name: "Fiddle Leaf Fig",
    price: 89.99,
    categories: ["Indoor", "Home Decor", "Statement Plant"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593470793708-9d3a1344536f?w=400"
  },
  {
    name: "English Ivy",
    price: 16.50,
    categories: ["Indoor", "Air Purifying", "Hanging"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1596469729332-4c2d5bd80c1d?w=400"
  },
  {
    name: "Boston Fern",
    price: 24.99,
    categories: ["Indoor", "Air Purifying", "Hanging"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1596469729332-4c2d5bd80c1d?w=400"
  },
  {
    name: "Lavender",
    price: 18.00,
    categories: ["Outdoor", "Aromatic", "Flowering"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1596469729332-4c2d5bd80c1d?w=400"
  },
  {
    name: "Rose Bush",
    price: 32.99,
    categories: ["Outdoor", "Flowering", "Garden"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400"
  },
  {
    name: "Tomato Plant",
    price: 12.99,
    categories: ["Outdoor", "Edible", "Vegetable"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1591720660442-4b5c8636beb3?w=400"
  },
  {
    name: "Basil",
    price: 9.99,
    categories: ["Outdoor", "Edible", "Herb"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1596469729332-4c2d5bd80c1d?w=400"
  },
  {
    name: "Mint",
    price: 10.50,
    categories: ["Outdoor", "Edible", "Herb", "Aromatic"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1596469729332-4c2d5bd80c1d?w=400"
  },
  {
    name: "Sunflower",
    price: 14.99,
    categories: ["Outdoor", "Flowering", "Garden"],
    inStock: false,
    imageUrl: "https://images.unsplash.com/photo-1597848212624-e9f84d7c5e8c?w=400"
  },
  {
    name: "Tulip Bulbs",
    price: 19.99,
    categories: ["Outdoor", "Flowering", "Bulb"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593470793708-9d3a1344536f?w=400"
  },
  {
    name: "Cactus",
    price: 22.00,
    categories: ["Indoor", "Succulent", "Low Maintenance"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400"
  },
  {
    name: "Orchid",
    price: 39.99,
    categories: ["Indoor", "Flowering", "Elegant"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1596469729332-4c2d5bd80c1d?w=400"
  },
  {
    name: "Bamboo Palm",
    price: 55.00,
    categories: ["Indoor", "Air Purifying", "Tropical"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Weeping Fig",
    price: 42.50,
    categories: ["Indoor", "Air Purifying", "Statement Plant"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Chinese Money Plant",
    price: 28.99,
    categories: ["Indoor", "Home Decor", "Low Maintenance"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "String of Pearls",
    price: 26.75,
    categories: ["Indoor", "Succulent", "Hanging"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Calathea",
    price: 34.99,
    categories: ["Indoor", "Home Decor", "Patterned Leaves"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Bird of Paradise",
    price: 79.99,
    categories: ["Indoor", "Tropical", "Statement Plant"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Philodendron",
    price: 29.50,
    categories: ["Indoor", "Air Purifying", "Low Maintenance"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Dracaena",
    price: 38.00,
    categories: ["Indoor", "Air Purifying", "Low Maintenance"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Areca Palm",
    price: 62.99,
    categories: ["Indoor", "Air Purifying", "Tropical"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Geranium",
    price: 16.99,
    categories: ["Outdoor", "Flowering", "Garden"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Hydrangea",
    price: 45.00,
    categories: ["Outdoor", "Flowering", "Shrub"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Lemon Tree",
    price: 89.99,
    categories: ["Outdoor", "Edible", "Fruit Tree"],
    inStock: false,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Maple Tree",
    price: 125.00,
    categories: ["Outdoor", "Tree", "Garden"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Cucumber Plant",
    price: 14.50,
    categories: ["Outdoor", "Edible", "Vegetable"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Bell Pepper",
    price: 15.99,
    categories: ["Outdoor", "Edible", "Vegetable"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Rosemary",
    price: 12.99,
    categories: ["Outdoor", "Edible", "Herb", "Aromatic"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Thyme",
    price: 11.50,
    categories: ["Outdoor", "Edible", "Herb"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Oregano",
    price: 10.99,
    categories: ["Outdoor", "Edible", "Herb"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Marigold",
    price: 9.99,
    categories: ["Outdoor", "Flowering", "Garden"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Petunia",
    price: 8.99,
    categories: ["Outdoor", "Flowering", "Hanging Basket"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Pansy",
    price: 7.99,
    categories: ["Outdoor", "Flowering", "Garden"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Daffodil Bulbs",
    price: 16.99,
    categories: ["Outdoor", "Flowering", "Bulb"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Crocus Bulbs",
    price: 14.50,
    categories: ["Outdoor", "Flowering", "Bulb"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Iris",
    price: 21.99,
    categories: ["Outdoor", "Flowering", "Garden"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Lily",
    price: 24.99,
    categories: ["Outdoor", "Flowering", "Garden"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Peony",
    price: 42.00,
    categories: ["Outdoor", "Flowering", "Shrub"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Azalea",
    price: 38.50,
    categories: ["Outdoor", "Flowering", "Shrub"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Boxwood",
    price: 55.00,
    categories: ["Outdoor", "Shrub", "Hedge"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Hosta",
    price: 22.99,
    categories: ["Outdoor", "Foliage", "Shade Loving"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Fern",
    price: 19.99,
    categories: ["Outdoor", "Foliage", "Shade Loving"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Canna Lily",
    price: 28.50,
    categories: ["Outdoor", "Flowering", "Tropical"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Begonia",
    price: 16.99,
    categories: ["Outdoor", "Flowering", "Shade Loving"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Impatiens",
    price: 14.99,
    categories: ["Outdoor", "Flowering", "Shade Loving"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Coleus",
    price: 12.99,
    categories: ["Outdoor", "Foliage", "Colorful"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  },
  {
    name: "Zinnia",
    price: 11.50,
    categories: ["Outdoor", "Flowering", "Garden"],
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1593483316242-27b5c5d44c9f?w=400"
  }
];

const seedDatabase = async () => {
  try {
    // connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await Plant.deleteMany({});
    await Plant.insertMany(samplePlants);

    console.log('✅ Database seeded successfully with 50 plants!');
    process.exit(); // exit after seeding
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();