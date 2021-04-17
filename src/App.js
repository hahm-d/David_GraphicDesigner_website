import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Brand from './components/pages/BrandList';
import { Helmet } from 'react-helmet';
import ScrollToTop from './components/ScrollToTop';

function App() {
  
  return (
    <>
      <Helmet>
        <title>David Kim</title>
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/contact' component={Contact} />
        </Switch>
          <Route path='/brand' component={Brand} />
      </Router>
    </>
  );
}

export default App;
