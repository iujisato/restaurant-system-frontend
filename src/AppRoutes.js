import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Restaurants from './components/Restaurants';
import Dishes from './components/Dishes';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/restaurants' exact component={Restaurants} />
      <Route path='/dishes' exact component={Dishes} />
    </Switch>
  )
}

export default Routes
