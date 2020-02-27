import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Layout from '../components/Layout/';
import Film from '../components/Components/Film';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Layout} />
            <Route path="/film/:id" component={Film} />
        </Switch>
    </Router>
);

export default Routes;