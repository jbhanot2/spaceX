import React from 'react';

const DisplayRocket = (props) => {
    return props.rocketData && props.rocketData.length ? 
                props.rocketData.map((item, key) => (
                    <div className="filter-info-section" key={key}>
                        <div>
                            <img src={item.links && item.links.mission_patch_small} alt=""/>
                            <span>{item.mission_name}</span>
                            <h4>Mission Ids: #{key+1}</h4>
                            {item.mission_id && item.mission_id.length ? 
                                <li className="mission-info-ids">
                                    {item.mission_id.map( missionData => missionData)}
                                </li> : ""}
                            <p className="mission-info-launch">
                                <b>Launch Year:</b>
                                <span>{item.launch_year}</span>
                            </p>
                            <p className="mission-info-launch">
                                <b>Successful Launch:</b>
                                <span>{item.launch_success ? 'true' : 'false'}</span>
                            </p>
                            <p className="mission-info-launch">
                                <b>Successful Landing:</b>
                                <span>{"launch_landing"}</span>
                            </p>
                        </div>
                    </div>
                )
        )  : ""
} 

export default DisplayRocket;