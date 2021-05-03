import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VisaoGeral from './views/app/VisaoGeral'
import Redirecionar from './views/user/Redirecionar'

function Routes() {
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <VisaoGeral/>
            </Route>
            <Route path="/:uri">
                <Redirecionar/>
            </Route>
        </Switch>
    </BrowserRouter>
    );
}
export default Routes;