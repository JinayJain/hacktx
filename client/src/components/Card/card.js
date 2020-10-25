import React, {useState, useEffect, setState} from 'react';
import 'antd/dist/antd.css';
import { Card, Button } from 'antd';
import './styles.css';
import { useHistory } from "react-router-dom";
import donkey from "./Democrat.png";
import elephant from "./Republican.png";

function Members({array}) {
    console.log(array);
    const parties = {
        "D" : donkey,
        "R" : elephant,
        "I" : donkey
    };

    const imagelink = "https://theunitedstates.io/images/congress/450x550/C001088.jpg"

    console.log("this ran 2");
    return (
        <div className="member-container">
            {console.log(array.length)}
        </div>
    );
}

const Member = ({name, image, state, district, hometown, party, partyimage}) => {
    let history = useHistory();
    function toProfile(name) {
        history.push("/member/"+ name);
    }
    return (
        <div className="member-card" size="small" style={{ width: 600, paddingTop: '0px', paddingBottom: '0px'}} onClick={()=>toProfile(name.replace(/\s/g, ''))}>
            
            <div className={party}><img className="partyicon" src={partyimage}></img><h1 className="text-padding">{name}</h1></div>
            <div className="card-body">
                <img className="headshot" src={image}></img>
                <div className="info">
                    <h2><strong>Party: </strong> {party}</h2>
                    <h2><strong>State: </strong>{state}</h2>
                    {district && (<h2><strong>District: </strong>{district}</h2>)}
                    <h2><strong>Hometown: </strong>{hometown}</h2>
                </div>
            </div>
        </div>
    );
};

export default Members;