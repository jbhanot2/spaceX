// import React, {Suspense, lazy} from 'react';
import Home from '../client/components/home';
import {Hello, loadData} from '../client/components/helloComponent';

export default [
    {
      loadData: loadData,
      path: '/',
      component: Home,
      exact: true            
    },
    { loadData: loadData,
        path: '/hello',
        component: Hello
    }
]