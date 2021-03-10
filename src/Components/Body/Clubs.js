import React from 'react';
import '../../App.css';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";

const Clubs = (props) => {
    const { strTeamBadge, strTeam, idTeam } = props.data;
    const history = useHistory()
    const handleExplore = (teamName, teamId) => {
        history.push(`/${teamName}/${teamId}`)
    }

    return (
        <div className="club-card col text-center m-2">
            <Card.Img variant="top" src={strTeamBadge} />
            <Card.Body>
                <Card.Title className="team-name">{strTeam}</Card.Title>
                <Button onClick={() => handleExplore(strTeam, idTeam)}>Explore  <FontAwesomeIcon icon={faArrowRight} /></Button>
            </Card.Body>
        </div>
    );
};

export default Clubs;