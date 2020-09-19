import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducer from '../client/reducers';

const store = createStore(reducer, {}, applyMiddleware(thunk));

export default store;