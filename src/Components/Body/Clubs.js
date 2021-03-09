import React from 'react';
import '../../App.css';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Clubs = (props) => {
    const { strTeamBadge, strTeam } = props.data;

    return (
        <div className="club-card text-center">
            <Card.Img variant="top" src={strTeamBadge} />
            <Card.Body>
                <Card.Title>{strTeam}</Card.Title>
                <Button>Explore  <FontAwesomeIcon icon={faArrowRight} /></Button>
            </Card.Body>
        </div>
    );
};

export default Clubs;