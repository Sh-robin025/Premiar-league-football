import React, { useEffect, useState } from 'react';
import '../../App.css';
import { useParams } from 'react-router';
import BannerOfDetails from './BannerOfDetails';
import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFemale, faMale } from '@fortawesome/free-solid-svg-icons';
import CoreInfoOfTeam from './CoreInfoOfTeam';

const TeamDetails = () => {
    const { teamId } = useParams()
    const [gender, setGender] = useState();
    const [details, setDetails] = useState({})
    const { strTeamBanner, strTeamBadge, strStadium } = details;

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))
    }, [teamId])


    return (
        <div>
            <BannerOfDetails logo={strTeamBadge} stadium={strStadium} />
            <div className="details pt-3">
                <Container className="text-center mb-3 d-flex justify-content-around">
                    <Button onClick={() => setGender("male")} >
                        <FontAwesomeIcon icon={faMale} /> Male Team</Button>
                    <Button onClick={() => setGender("female")}>
                        <FontAwesomeIcon icon={faFemale} /> Female Team</Button>
                </Container>
                <CoreInfoOfTeam data={details} gender={gender} />
                <img src={strTeamBanner} className="banner" alt="" />
            </div>
        </div>
    );
};

export default TeamDetails;