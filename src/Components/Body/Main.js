
import React, { useEffect, useState } from 'react';
import '../../App.css';
import Clubs from './Clubs';
import CarouselSlider from './CarouselSlider';
import Sponsor from './Sponsor';

const Main = () => {
    const [club, setClub] = useState([]);

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League")
            .then(res => res.json())
            .then(data => setClub(data.teams))
    }, [])

    return (
        <div>
            <CarouselSlider index={index} eventHandler={handleSelect} />
            <div className="container p-3 club">
                {
                    club.map(item => <Clubs key={item.idTeam} data={item} />)
                }
            </div>
            <Sponsor />
        </div>

    );
};

export default Main;