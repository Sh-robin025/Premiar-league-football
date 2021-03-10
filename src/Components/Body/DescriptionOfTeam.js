import React from 'react';
import { Container } from 'react-bootstrap';

const DescriptionOfTeam = (props) => {
    const { strDescriptionEN, strStadiumDescription, strStadium } = props.data;

    return (
        <Container className="text-light mt-4">
            <p>{strDescriptionEN}</p>
            <br />
            <h5 className="text-center">{strStadium}</h5>
            <p>{strStadiumDescription}</p>
        </Container>
    );
};

export default DescriptionOfTeam;