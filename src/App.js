import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/heaader/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
