import React, { useEffect, useState } from 'react';
import '../../App.css';
import { useParams } from 'react-router';
import BannerOfDetails from './BannerOfDetails';
import CoreInfoOfTeam from './CoreInfoOfTeam';
import DescriptionOfTeam from './DescriptionOfTeam';
import Connection from './Connection';

const TeamDetails = () => {
    const { teamId } = useParams()
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
            <div className="details pt-5">
                <CoreInfoOfTeam data={details} />
                <DescriptionOfTeam data={details} />
                <Connection data={details}/>
                <img src={strTeamBanner} className="banner" alt="" />
            </div>
        </div>
    );
};

export default TeamDetails;