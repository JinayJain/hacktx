import React, {useState, useEffect, setState} from 'react';
import 'antd/dist/antd.css';
import { Card, Button } from 'antd';
import './styles.css';
import { useHistory } from "react-router-dom";
import donkey from "./Democrat.png";
import elephant from "./Republican.png";

function Members({array}) {
    console.log("array e:" + array);
    let [members, setMembers] = useState([]);
    useEffect(() => {
        if(members.length == 0) {
            setMembers(array);
        } else if (members.length != 0) {
            setMembers(array);
        }
    }) 
    
    let imagelink = "https://theunitedstates.io/images/congress/450x550/C001088.jpg"
    let returnParty;
    let party;
    console.log(members);


    return (
        <div className="member-container">

            {members && members.map((data, key) => {
                if ((data.party) === "R"){
                    returnParty="Republican";
                    party = elephant;
                } else if (data.party === "D") {
                    returnParty="Democrat";
                    party = donkey;
                } else {
                    returnParty="Independent";
                }
                return (
                    <>
                        <Member
                            name={data.first + " " + data.last}
                            state={data.state}
                            district={data.district}
                            hometown={data.hometown}
                            party= {returnParty}
                            partyimage={party}
                        />
                    </>
                )
            })}

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
                    <h2><strong>District: </strong>{district}</h2>
                    <h2><strong>Hometown: </strong>{hometown}</h2>
                </div>
            </div>
        </div>
    );
};

export default Members;