import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import store from '../helpers/createStore';
import * as serviceWorker from '../helpers/serviceWorker';
import {renderRoutes} from "react-router-config";

ReactDOM.hydrate(<Provider store={store}>
                    <BrowserRouter>
                        <div>{renderRoutes(Routes)}</div>
                    </BrowserRouter>
                </Provider>,
    document.querySelector('#root'));

serviceWorker.register();