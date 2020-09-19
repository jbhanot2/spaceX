import axios from 'axios';
import * as constant from '../utilities/constant';

export const fetchData = (param) =>  {
    return async (dispatch) => {
        const {url} = param;
        console.log("param", param, url)
        const response = await axios.get(url);
    
        dispatch({
            payload: response,
            type: constant.FETCH_DATA
        })    
    }
}