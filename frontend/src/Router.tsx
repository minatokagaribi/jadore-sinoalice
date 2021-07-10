import * as React from 'react';
import { BrowserRouter, Route, Redirect} from 'react-router-dom';

import Component1 from './Component1';
import TestComponent from './test/testComponent';

const Router = () => {
    return (
         <BrowserRouter>
            <switch>
                <Route exact={true} path="/" component={Component1} />
                <Route path="/Component1" component={Component1}></Route>
                <Route path="/TestComponent" component={TestComponent}></Route>
                {/* Not Fount */}
                <Route component={() => <Redirect to="/" />} />
            </switch>
        </BrowserRouter>
    );
};

export default Router;