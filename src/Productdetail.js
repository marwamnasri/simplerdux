import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: 'Product 1',
    image: 'image_url_1.jpg',
    description: 'Description of Product 1...',
  },
  {
    id: 2,
    title: 'Product 2',
    image: 'image_url_2.jpg',
    description: 'Description of Product 2...',
  },
  // Add more products here...
];

function ProductDetails() {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      {/* Other details and buttons */}
    </div>
  );
}

export default ProductDetails;

