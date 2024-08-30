import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Sample data for businesses
const businessData = [
  { 
    id: 1, 
    name: 'Jamdani Polli', 
    description: 'One of the leading handicraft businesses in Bangladesh.', 
    imageUrl: '/images/banner15.jpg', 
    likes: 200, 
    products: 100, 
    yearsOfOperation: 10,
    productsList: [
      { id: 1, name: 'Clay Sculpture', materials: 'Clay', method: 'Carving', rating: 5 },
      { id: 2, name: 'Handwoven Basket', materials: 'Bamboo', method: 'Weaving', rating: 4.8 },
    ]
  },
  { 
    id: 2, 
    name: 'Jute Craft Bangladesh', 
    description: 'High-quality handmade crafts.', 
    imageUrl: '/images/banner17.jpg', 
    likes: 350, 
    products: 85, 
    yearsOfOperation: 5,
    productsList: [
      { id: 1, name: 'Decorative Wallmet', materials: 'Ceramic', method: 'Glazing', rating: 4.4 },
      { id: 2, name: 'Handmade Rug', materials: 'Wool', method: 'Weaving', rating: 4.8 },
    ]
  },
  { 
    id: 3, 
    name: 'Monipuri village', 
    description: 'High-quality handmade Shawl.', 
    imageUrl: '/images/banner18.jpg', 
    likes: 140, 
    products: 100, 
    yearsOfOperation: 10,
    productsList: [
      { id: 1, name: 'Cane Products', materials: 'cane', method: 'Weaving', rating: 4.6 },
      { id: 2, name: 'Woolen Craft', materials: 'Wool', method: 'Weaving', rating: 4.9 },
    ]
  },
  { 
    id: 4, 
    name: 'Soilpick', 
    description: 'High-quality handmade crafts.', 
    imageUrl: '/images/banner14.jpg', 
    likes: 150, 
    products: 285, 
    yearsOfOperation: 3,
    productsList: [
      { id: 1, name: 'Orange Recycled Handmade Paper Photo Frame', materials: 'Paper', method: 'Handmade', rating: 4.6 },
      { id: 2, name: 'Recycled Handmade Paper Photo Frame', materials: 'Paper', method: 'Handmade', rating: 4.9 },
    ]
  },
  { 
    id: 5, 
    name: 'Traditional pottery Bangladesh', 
    description: 'High-quality handmade crafts.', 
    imageUrl: '/images/banner2.jpg', 
    likes: 240, 
    products: 895, 
    yearsOfOperation: 9,
    productsList: [
      { id: 1, name: 'Decoral', materials: 'Clay', method: 'Pottery Wheel, Kiln Firing', rating: 4.6 },
      { id: 2, name: 'Tin Craft', materials: 'Tin', method: 'Carving, Drilling', rating: 4.9 },
    ]
  },
  { 
    id: 6, 
    name: 'Art & Craft', 
    description: 'High-quality handmade crafts.', 
    imageUrl: '/images/banner11.jpg', 
    likes: 150, 
    products: 85, 
    yearsOfOperation: 5,
    productsList: [
      { id: 1, name: 'Batik Painting', materials: 'Fabric, Wax, Dye', method: 'Batik Technique (Wax Resist Dyeing)', rating: 4.6 },
      { id: 2, name: 'Miniature Painting', materials: 'Paper, Watercolor, Ink', method: 'Hand Painting, Detailing with Fine Brushes', rating: 4.9 },
    ]
  },
  { 
    id: 7, 
    name: 'Bangla Kantha', 
    description: 'High-quality handmade crafts.', 
    imageUrl: '/images/banner8.jpg', 
    likes: 240, 
    products: 120, 
    yearsOfOperation: 10,
    productsList: [
      { id: 1, name: 'Moslin Villa', materials: 'Moslin', method: 'Handcrafted and Painted', rating: 4.6 },
      { id: 2, name: 'Handwoven Jute Bag', materials: 'Jute Fiber', method: 'Traditional Weaving', rating: 4.9 },
    ]
  },
  { 
    id: 8, 
    name: 'Suchuna Craft Work', 
    description: 'High-quality handmade crafts.', 
    imageUrl: '/images/banner9.jpg', 
    likes: 150, 
    products: 85, 
    yearsOfOperation: 5,
    productsList: [
      { id: 1, name: 'Decorative Clay Vase', materials: 'Clay', method: 'Wheel Thrown and Hand-Painted', rating: 4.6 },
      { id: 2, name: 'Traditional Earthenware Pot', materials: 'Terracotta Clay', method: 'Handcrafted and Kiln-Fired', rating: 4.9 },
    ]
  },
  { 
    id: 9, 
    name: 'Cane Craft', 
    description: 'High-quality handmade crafts.', 
    imageUrl: '/images/banner4.jpg', 
    likes: 180, 
    products: 200, 
    yearsOfOperation: 4,
    productsList: [
      { id: 1, name: 'Cane Craft', materials: ' Cane', method: 'Cane Craft using traditionality', rating: 4.6 },
      { id: 2, name: 'Silk Handloom Sharee', materials: 'Silk', method: 'Handwoven with intricate patterns and designs', rating: 4.9 },
    ]
  },
  { 
    id: 10, 
    name: 'Clay pot business', 
    description: 'High-quality handmade crafts.', 
    imageUrl: '/images/banner3.jpg', 
    likes: 170, 
    products: 150, 
    yearsOfOperation: 6,
    productsList: [
      { id: 1, name: 'Decorative Terracotta Pot', materials: 'Clay', method: 'Handcrafted and kiln-fired', rating: 4.6 },
      { id: 2, name: 'Traditional Earthen Water Pot', materials: 'TRed Clay', method: 'Wheel-thrown and fired in a traditional kiln', rating: 4.9 },
    ]
  },
  { 
    id: 11, 
    name: 'Glass Artist', 
    description: 'High-quality handmade crafts.', 
    imageUrl: '/images/banner12.jpg', 
    likes: 170, 
    products: 150, 
    yearsOfOperation: 6,
    productsList: [
      { id: 1, name: 'Decorative Terracotta Pot', materials: 'Clay', method: 'Handcrafted and kiln-fired', rating: 4.6 },
      { id: 2, name: 'Traditional Earthen Water Pot', materials: 'TRed Clay', method: 'Wheel-thrown and fired in a traditional kiln', rating: 4.9 },
    ]
  },
  { 
    id: 12, 
    name: 'Lippon Artist', 
    description: 'High-quality handmade crafts.', 
    imageUrl: '/images/banner10.jpg', 
    likes: 170, 
    products: 150, 
    yearsOfOperation: 6,
    productsList: [
      { id: 1, name: 'Decorative Terracotta Pot', materials: 'Clay', method: 'Handcrafted and kiln-fired', rating: 4.6 },
      { id: 2, name: 'Traditional Earthen Water Pot', materials: 'TRed Clay', method: 'Wheel-thrown and fired in a traditional kiln', rating: 4.9 },
    ]
  },
  // Add more businesses here...
];

const BusinessPage = () => {
  const { id } = useParams(); // Get the business ID from the URL
  const navigate = useNavigate();

  const business = businessData.find(b => b.id === parseInt(id));

  const handleFavoriteClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  if (!business) {
    return <div>Business not found</div>;
  }

  return (
    <div>
      <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url(${business.imageUrl})` }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">{business.name}</h1>
          <p className="mt-2 text-lg">{business.description}</p>
          <div className="mt-4">
            <span className="mr-4">Likes: {business.likes}</span>
            <span className="mr-4">Products: {business.products}</span>
            <span>Years in Operation: {business.yearsOfOperation}</span>
          </div>
        </div>
      </div>
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-8">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {business.productsList.map(product => (
            <div 
              key={product.id} 
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{product.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">Materials: {product.materials}</p>
              <p className="text-gray-600 dark:text-gray-400">Method: {product.method}</p>
              <p className="text-yellow-500 dark:text-yellow-400">Rating: {product.rating} ★</p>
              <button 
                onClick={handleFavoriteClick} 
                className="mt-4 bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500 dark:hover:bg-blue-600"
              >
                Favorite
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;