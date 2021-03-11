import React from 'react';
import foundIco from '../../../Icon/found 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';

const Male = (props) => {
    const { strTeam, intFormedYear, strCountry, strStadiumLocation, strGender, strTeamFanart4 } = props.data;

    return (
        <div className="text-light p-4 core-data row justify-content-between">
            <div className="col">
                <h2>{strTeam}</h2>
                <br />
                <h6>
                    <i><img style={{ width: '24px', marginRight: '8px' }} src={foundIco} alt="" /></i> Founded : {intFormedYear}</h6>
                <h6>
                    <FontAwesomeIcon style={{ marginRight: '8px', fontSize: '20px' }} icon={faFutbol} /> Country : {strCountry}
                </h6>
                <h6>
                    <FontAwesomeIcon style={{ marginRight: '8px', fontSize: '20px' }} icon={faFutbol} /> Stadium : {strStadiumLocation}
                </h6>
                <h6>
                    <FontAwesomeIcon style={{ marginRight: '8px', fontSize: '25px' }} icon={faMars} /> Gender : {strGender} </h6>
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <img src={strTeamFanart4} style={{ height: '250px' }} alt="" />
            </div>
        </div>
    );
};

export default Male;