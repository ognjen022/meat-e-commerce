import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
import './AppRouter.css';

const AppRouter = () => (
  <Router>
    <Header />
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
              <Route exact path="/" component={Landing} />
              <Route
                exact
                path="/products"
                render={() => (
                  <div className="page">
                    <Dashboard />
                  </div>
                )}
              />
              <Route
                exact
                path="/contact"
                render={() => (
                  <div className="page">
                    <Contact />
                  </div>
                )}
              />
              <Route
                exact
                path="/about"
                render={() => (
                  <div className="page">
                    <About />
                  </div>
                )}
              />
              <Route
                exact
                path="/mycart"
                render={() => (
                  <div className="page">
                    <Cart />
                  </div>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  </Router>
);

export default AppRouter;
