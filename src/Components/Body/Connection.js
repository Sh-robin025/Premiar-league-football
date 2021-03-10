import React from 'react';
import '../../App.css';
import { Container } from 'react-bootstrap';
import facebook from '../../Icon/Facebook.png';
import twitter from '../../Icon/Twitter.png';
import youtube from '../../Icon/YouTube.png';
import { Link } from 'react-router-dom';

const Connection = (props) => {
    const { strFacebook, strTwitter, strYoutube } = props.data;

    return (
        <Container className="text-center p-3">
            <Link to={`//${strFacebook}`} target="_blank">
                <img src={facebook} className="social-icon" alt="" />
            </Link>
            <Link to={`//${strTwitter}`} target="_blank">
                <img src={twitter} className="social-icon" alt="" />
            </Link>
            <Link to={`//${strYoutube}`} target="_blank">
                <img src={youtube} className="social-icon" alt="" />
            </Link>
        </Container>
    );
};

export default Connection;