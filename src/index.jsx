import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PortfolioSite from './PortfolioSite.jsx';
import ModalContextProvider from './providers/ModalContextProvider.jsx';
import './css/main.css';
import 'animate.css';
// import './css/sidebar.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <ModalContextProvider><PortfolioSite /></ModalContextProvider>} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('app-root'))