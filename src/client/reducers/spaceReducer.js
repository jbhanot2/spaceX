import fetchData from '../actions/index';
import * as constant from '../utilities/constant';

export default (state=[], action) => {
    switch(action.type) {
        case constant.FETCH_DATA: 
            return action.payload.data;
        default: 
            return state;
    }
} 