import React from 'react';
import '../../App.css';
import { Container } from 'react-bootstrap';
import DescriptionOfTeam from './DescriptionOfTeam';
import Connection from './Connection';
import Female from './GenderInfo/Female';
import Male from './GenderInfo/Male';


const CoreInfoOfTeam = (props) => {
    const { strTeam,strTeamLogo } = props.data;
    const gender = props.gender;

    return (
        <Container>
            {gender === 'female' ?
                <Female teamName={strTeam} />
                : gender === 'male' ?
                    <div>
                        <Male data={props.data}/>
                        <DescriptionOfTeam data={props.data} />
                    </div>
                    :
                    <div>
                        <Container className="p-4 core-data text-center bg-light">
                            <img src={strTeamLogo} style={{ width: '50%' }} alt="" />
                        </Container>
                        <DescriptionOfTeam data={props.data} />
                    </div>
            }
            <Connection data={props.data} />
        </Container>
    );
};

export default CoreInfoOfTeam;