import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Consulting from '../pages/consulting';
import ContactUs from '../pages/contactus';
import Design from '../pages/Design';
import Development from '../pages/Development';
import Home from '../pages/home';
import Marketing from '../pages/marketing';
import Products from '../pages/products';
import Services from '../pages/services';
import SignUp from '../pages/signup';

import NavBar from './NavBar';

const App = () => {
    return (
        <div className="app">
            <Router>
                <NavBar />
                {/* Renders out each page, if the url is switched. */}
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/services'  component={Services} />
                    <Route path='/products'  component={Products} />
                    <Route path='/contact-us'  component={ContactUs} />
                    <Route path='/sign-up'  component={SignUp} />
                    <Route path='/marketing'  component={Marketing} />
                    <Route path='/consulting'  component={Consulting} />
                    <Route path='/design'  component={Design} />
                    <Route path='/development'  component={Development} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
