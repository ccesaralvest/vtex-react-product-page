import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import './components/Header.css';
import Header from './components/Header';

import './pages/Product.css';
import Product from './pages/Product';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Product />
  </React.StrictMode>,
  document.getElementById('root')
);