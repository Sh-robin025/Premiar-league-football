import React from 'react';
import '../../App.css';

const BannerOfDetails = (props) => {

    return (
        <div className="stadium text-center">
            <img style={{ height: '180px', marginTop: '25px' }} src={props.logo} alt="" />
            <h5 className="text-light mt-2">{props.stadium}</h5>
        </div>
    );
};

export default BannerOfDetails;