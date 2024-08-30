import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Sample data for product
const productData = [
        { 
          id: 1, 
          name: 'Handcrafted Vase', 
          imageUrl:'/images/s-l1200.jpg', 
          price: '100tk', // Corrected: price is now a string
        },
      
  { 
    id: 2, 
    name: 'Bamboo Basket', 
    imageUrl:'/images/bb.png', 
    price: '500tk', // Corrected: price is now a string, 
  },
  { 
    id: 3, 
    name: 'Clay Pot',  
    imageUrl:'/images/pp.jpg', 
    price: '25tk', // Corrected: price is now a string, 
    
  },
  { 
    id: 4, 
    name: 'Jamdani Saree', 
    imageUrl:'/images/jj.jpg', 
    price: '5000tk', // Corrected: price is now a string,  
    
    
  },
  { 
    id: 5, 
    name: 'Wooden Sculpture', 
    imageUrl: '/images/oo.jpg', 
    price: '1000tk', // Corrected: price is now a string, 
  }, 
   
  // Add more product here...
];

const productpage = () => {
  const { id } = useParams(); // Get the business ID from the URL
  const navigate = useNavigate();

  const product = productData.find(b => b.id === parseInt(id));

  const handleFavoriteClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  if (!product) {
    return <div>product not found</div>;
  }

  return (
    <div>
      <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url(${product.imageUrl})` }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <div className="mt-4">
            <span className="mr-4">price: {product.price}</span>
            <span className="mr-4">Products: {product.products}</span>
          </div>
        </div>
      </div>
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{product.name}</h3>
              <p className="text-gray-600 dark:text-gray-400"> {product.price}</p>
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

export default productpage;