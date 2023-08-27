import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ProductDetails from './Productdetail';

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

function ProductList() {
  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <button>Buy Now</button>
            </Link>
          </div>
        ))}
      </div>
      <Switch>
        <Route path="/product/:productId" component={ProductDetails} />
      </Switch>
    </div>
  );
}

export default ProductList;

