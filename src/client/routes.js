import React, {Suspense, lazy} from 'react';
import Home from '../client/components/home';
import {Route} from 'react-router-dom';

export default () => {
    return <div>
            <Route exact path={'/'} component={Home} />
    </div>
}