import React, {useState, useEffect, setState} from 'react';
import 'antd/dist/antd.css';
import { Card, Button } from 'antd';
import './styles.css';
import { useHistory } from "react-router-dom";
import donkey from "./Democrat.png";
import elephant from "./Republican.png";

function Members({array}) {
    console.log(array);

    console.log("this ran 2");
    return (
        <div className="member-container">
            {array.map((member, i) => (
                <Member 
                id={member.id}
                name={member.first_name + " " + member.last_name}
                image={"https://theunitedstates.io/images/congress/450x550/" + member.id + ".jpg"} 
                state={member.state} 
                district={member.district} 
                party={member.party}
                />
            ))}
        </div>
    );
}

const Member = ({id, name, image, state, district, party}) => {
    let history = useHistory();
    let partyimage;
    let partytext; 
    function toProfile(name) {
        history.push("/members/"+ id);
    }
    const parties = {
        "D" : donkey,
        "R" : elephant,
        "I" : donkey
    };
    
    if (party == 'D') {
        partytext = "Democrat";
    } else if (party == 'R') {
        partytext = "Republican";
    } else {
        partytext = "Independent";
    }

    
    return (
        <div className="member-card" size="small" style={{ width: 600, paddingTop: '0px', paddingBottom: '0px'}} onClick={()=>toProfile(name.replace(/\s/g, ''))}>
            <div className={partytext}><img className="partyicon" src={parties[party]}></img><h1 className="text-padding">{name}</h1></div>
            <div className="card-body">
                <img className="headshot" src={image}></img>
                <div className="info">
                    <h2><strong>Party: </strong> {partytext}</h2>
                    <h2><strong>State: </strong>{state}</h2>
                    {district && (<h2><strong>District: </strong>{district}</h2>)}
                </div>
            </div>
        </div>
    );
};

export default Members;