import React from 'react';
import * as constant from '../utilities/constant';

const FiltesComponent = (props) => {

    const createFilter = (filterName, filtervalue) => {
        let filter = '';
        filter = filtervalue == 'ALL' ? '' : `&${filterName}=${filtervalue}`
        props.appliedFilter(filter);
    }

    return <div className="launch-filter-section">
                    <span className="launch-filter-title">Filters</span>
                    <div className="filter-cta-section">
                        <span>Launch Year</span>
                        <div className="launch-filter-divider"></div>
                        <div>
                            {constant.FILTER_ARRAY && constant.FILTER_ARRAY.length && 
                                constant.FILTER_ARRAY.map( (item, key) => (
                                    <button key={key} onClick={createFilter.bind({}, constant.FILTER_NAME[0], item)}>
                                        {item}
                                    </button>
                                    )
                                )
                            }
                        </div>
                    </div>
                    <div className="filter-cta-section">
                        <span>Successful Launch</span>
                        <div className="launch-filter-divider"></div>
                        <div>
                            <button onClick={createFilter.bind({}, constant.FILTER_NAME[1] ,'true')}>TRUE</button>
                            <button onClick={createFilter.bind({}, constant.FILTER_NAME[1], 'false')}>FALSE</button>
                        </div>
                    </div>
                    <div className="filter-cta-section">
                        <span>Successful Landing</span>
                        <div className="launch-filter-divider"></div>
                        <div>
                            <button onClick={createFilter.bind({}, constant.FILTER_NAME[2] ,'true')}>TRUE</button>
                            <button onClick={createFilter.bind({}, constant.FILTER_NAME[2] ,'true')}>FALSE</button>
                        </div>
                    </div>
                </div>
}

export default FiltesComponent;