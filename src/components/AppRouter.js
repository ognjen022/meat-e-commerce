import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import createHistory from "history/createBrowserHistory";

// My components
import Dashboard from "./Dashboard";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Landing from "./Landing";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

const AppRouter = () => (
    <Router>
        <Header />
        <Container>
            <Switch>
                <Route path="/" component={Landing} exact={true} />
                <Route path="/products" component={Dashboard} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
            </Switch>
        </Container>
    </Router>
)

export default AppRouter;