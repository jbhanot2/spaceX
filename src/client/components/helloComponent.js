
import React from 'react';
import {fetchData} from '../actions/index';

export const Hello = () => {
    return <div>
        This is hello component Routes.
    </div>
}

function loadData(store) {
    store.dispatch(fetchData({url: 'https://api.spacexdata.com/v3/launches?limit=100'}));
}

export {loadData};