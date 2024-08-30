
import React from 'react';
import { Link } from 'react-router-dom';


const productcard = ({ product }) => {
  return (
  
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg">
      
      <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover rounded mb-4" />
      <h3 className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">{product.name}</h3>
      <p className="text-gray-600 dark:text-gray-400">price: {product.Price}</p>
       eslint-disable-next-line react/prop-types, react/prop-types
      <Link to={`/product/${product.id}`} className="mt-4 inline-block bg-blue-600 dark:bg-blue-700 text-white dark:text-gray-200 px-4 py-2 rounded hover:bg-blue-500 dark:hover:bg-blue-600">
        View Products
      </Link>
      <div className="video-container text-center my-12">
      <video width="600" controls>
        {/* Directly reference the video file from the public directory */}
        <source src="/videos/only.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  
    </div>
  );
};

export default productcard;
