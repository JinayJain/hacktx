import React, {useState, useEffect, setState} from 'react';
import 'antd/dist/antd.css';
import { Card, Button } from 'antd';
import './styles.css';
import { useHistory } from "react-router-dom";


function Members() {
    const  [members,setMembers]= useState([{"first":"Lamar","last":"Alexander","party":"R","state":"TN","hometown":"Maryville"}]);
    
    let returnParty;
    return (
        <div className="member-container">
            {members && members.map((data, key) => {
                if ((data.party) === "R"){
                    returnParty="Republican";
                } else if (data.party === "D") {
                    returnParty="Democrat";
                } else {
                    returnParty="Independent";
                }
                return (
                    <div key={key}>
                        <Member
                            name={data.first + " " + data.last}
                            state={data.state}
                            district={data.district}
                            hometown={data.hometown}
                            party= {returnParty}
                        />
                    </div>
                )
            })}

        </div>
    );
}

const Member = ({name, state, district, hometown, party}) => {
    let history = useHistory();
    function toProfile(name) {
        history.push("/member/"+ name);
    }
    return (
        <div className="member-card">
            {/* <img src={image}></img> */}
            <div className={party}><h1>{party}</h1></div>
            <h2><strong>{name}</strong></h2>
            <h4><strong>State: </strong>{state}</h4>
            <h4><strong>District: </strong>{district}</h4>
            <h4><strong>Hometown: </strong>{hometown}</h4>
            <Button type="primary" shape="round" size='large' onClick={()=>toProfile(name.trim())}>
                Candidate Profile
            </Button>
        </div>
    );
};

export default Members;