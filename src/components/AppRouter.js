import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import createHistory from "history/createBrowserHistory";

// My components
import Dashboard from './Dashboard';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Landing from './Landing';
import Cart from './Cart';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const AppRouter = () => (
  <Router>
    <Header />

    <Switch>
      <Route exact path="/" component={Landing} />
      <Container>
        <Route exact path="/products" component={Dashboard} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/mycart" component={Cart} />
      </Container>
    </Switch>
  </Router>
);

export default AppRouter;
