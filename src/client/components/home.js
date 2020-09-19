import React, {lazy, Suspense, useEffect, useState} from 'react';
import FiltesComponent from './filters';
import DisplayRocket from './display';
import * as constant from '../utilities/constant';
import axios from 'axios';
import './index.scss';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../actions';

const Home = (props) => {
    const [rocketData, setData] = useState();
    const [isLoading, updataLoadingStatus] = useState(true);

    // Pass an empty array to run only callback on mount only.  
    useEffect(() => {
      let url = getURL();
      if(url) {
        url = "&" + url;
      }
      else {
        url = ""
      }
      // call action creator
      props.fetchData({url: constant.SPACEX_API_CALL + url});
    //   apiCall(url)
    }, []);

    const appliedFilter = (urlParam) => {
        let url = decodeURL(window.location.search);
        props.history.push(`?${urlParam}`)

        // // api call
        // updataLoadingStatus(true)

        // call action creator
        props.fetchData({url: constant.SPACEX_API_CALL + urlParam});
    }

    const apiCall = (param) => {
        axios(constant.SPACEX_API_CALL + param)
        .then( res => {
            setData(res.data)
            updataLoadingStatus(false);
        })
    }

    const decodeURL = (url) => {
        url = decodeURI(url);
        if (url && typeof url === 'string') {
            let params = url.split('?');
            let eachParamsArr = params[1].split('&');
            let obj = {};
            if (eachParamsArr && eachParamsArr.length) {
                eachParamsArr.map(param => {
                    if(param) {
                        let keyValuePair = param.split('=')
                        let key = keyValuePair[0];
                        let value = keyValuePair[1];
                        obj[key] = value;    
                    }
                })
            }
            return obj;
        }    
    }

    const getURL = () => {
        const queryParam = window.location.search
        let decodedUrl = decodeURL(queryParam)
          if(decodedUrl) {
              let newDecodedUrl = new Object();
              Object.keys(decodedUrl).forEach( key => {
                  if(constant.FILTER_NAME.includes(key)) {
                      newDecodedUrl[key] = decodedUrl[key];
                  }
              })  
              var queryString = Object.keys(newDecodedUrl).map(key => key + '=' + newDecodedUrl[key]).join('&');
              return queryString;
           }  
           else return;
    }

    const redirectToHomepage = () => {
        props.history.push(`/`);
        appliedFilter('')
    }

    return <div className="launch-model">
                <div className="launch-title">
                    <h3 onClick={redirectToHomepage.bind()}>SpaceX Launch Program</h3>
                </div>
                <div className="launch-container-block">
                    {!props.spaceData ? 
                        <div className="loading">
                            <div>...Loading</div>
                            <div>Please hold on! We are fetching your data from 100 nautical mile.</div>
                        </div>:
                        <React.Fragment>
                            <FiltesComponent appliedFilter={appliedFilter} />
                            <div className="filter-info-section">
                                <DisplayRocket rocketData={props.spaceData}/>
                            </div>
                            </React.Fragment>
                    }
                </div>
            </div>
}

const mapStateToProps = (state) => {
    return {
        spaceData: state.space
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return bindActionCreators({
        fetchData
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps )(Home);