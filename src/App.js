import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";


function App() {
  return (
    <div>
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/shop' component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
