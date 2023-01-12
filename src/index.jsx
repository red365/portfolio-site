import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PortfolioSite from './PortfolioSite.jsx';
import AnalysisView from './data-analysis/AnalysisView.jsx';
import ModalContextProvider from './providers/ModalContextProvider.jsx';
import './css/main.css';
import 'animate.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/data-analysis" component={AnalysisView} />
      <Route path="/" render={(props) => <ModalContextProvider><PortfolioSite /></ModalContextProvider>} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('app-root'))