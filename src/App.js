import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Route, Link } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Homepage />} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
