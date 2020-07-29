import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Video from './pages/Video';
import Category from './pages/Category';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/cadastro/video' component={Video} />
    <Route path='/cadastro/categoria' component={Category} />
    <Route component={() => (<div>404 not found</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

