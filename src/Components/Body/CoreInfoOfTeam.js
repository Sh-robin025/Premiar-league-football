import React from 'react';
import '../../App.css';
import foundIco from '../../Icon/found 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import femaleImg from '../../images/female-cooking.png';
import DescriptionOfTeam from './DescriptionOfTeam';
import Connection from './Connection';


const CoreInfoOfTeam = (props) => {
    const { strTeam, intFormedYear, strCountry, strStadiumLocation, strGender, strTeamFanart4 } = props.data;
    const gender = props.gender;

    return (
        <Container>
            {gender === 'female' ?
                <div className="text-light p-4 core-data">
                    <h3>The Developer Has Nothing To Show Details About Female Team of {strTeam} !</h3>
                    <br />
                    <h4>* Female Players Are Busy With Family....</h4>
                    <img src={femaleImg} style={{ width: '100%', height: '350px', borderRadius: '15px', overflow: 'hidden' }} alt="" />
                </div>
                :
                <div>
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
                    <DescriptionOfTeam data={props.data} />
                </div>}
            <Connection data={props.data} />
        </Container>
    );
};

export default CoreInfoOfTeam;