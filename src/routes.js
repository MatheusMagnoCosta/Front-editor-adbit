import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VisaoGeral from './views/app/VisaoGeral'

function Routes() {
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <VisaoGeral/>
            </Route>
        </Switch>
    </BrowserRouter>
    );
}
export default Routes;