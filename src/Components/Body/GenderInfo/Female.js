import React from 'react';

import femaleImg from '../../../images/female-cooking.png';

const Female = (props) => {
    
    return (
        <div className="text-light p-4 core-data">
            <h3>The Developer Has Nothing To Show Details About Female Team of {props.teamName} !</h3>
            <br />
            <h4>* Female Players Are Busy With Family....</h4>
            <img src={femaleImg} style={{ width: '100%', height: '350px', borderRadius: '15px', overflow: 'hidden' }} alt="" />
        </div>
    );
};

export default Female;