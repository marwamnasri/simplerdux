import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import CartComponent from './CartComponent';
import ProductList from './Allproduct';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main>
          <ProductList/>
          <CartComponent />
        </main>
      </div>
    </Provider>
  );
}

export default App;
