import React from 'react';
import ReactDOM from 'react-dom';

// General Styles
import './reset.css'
import './index.css'

// Components
import './components/Header.css';
import Header from './components/Header';

import './components/FreeChangeProductBar.css';
import FreeChangeProduct from './components/FreeChangeProductBar'

import './pages/Product.css';
import Product from './pages/Product';

ReactDOM.render(
  <React.StrictMode>
    <FreeChangeProduct />
    <Header />
    <Product />
  </React.StrictMode>,
  document.getElementById('root')
);