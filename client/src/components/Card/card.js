import React, {useState, useEffect, setState} from 'react';
import 'antd/dist/antd.css';
import { Card, Button } from 'antd';
import './styles.css';
import { useHistory } from "react-router-dom";


function Members() {
    const  [members,setMembers]= useState([{"first":"Lamar","last":"Alexander","party":"R","state":"TN","hometown":"Maryville"},{"first":"Tammy","last":"Baldwin","party":"D","state":"WI","hometown":"Madison"},{"first":"John","last":"Barrasso","party":"R","state":"WY","hometown":"Casper"},{"first":"Michael F.","last":"Bennet","party":"D","state":"CO","hometown":"Denver"},{"first":"Marsha","last":"Blackburn","party":"R","state":"TN","hometown":"Brentwood"},{"first":"Richard","last":"Blumenthal","party":"D","state":"CT","hometown":"Greenwich"},{"first":"Roy","last":"Blunt","party":"R","state":"MO","hometown":"Springfield"},{"first":"Cory A.","last":"Booker","party":"D","state":"NJ","hometown":"Newark"},{"first":"John","last":"Boozman","party":"R","state":"AR","hometown":"Rogers"},{"first":"Mike","last":"Braun","party":"R","state":"IN","hometown":"Jasper"},{"first":"Sherrod","last":"Brown","party":"D","state":"OH","hometown":"Cleveland"},{"first":"Richard","last":"Burr","party":"R","state":"NC","hometown":"Winston-Salem"},{"first":"Maria","last":"Cantwell","party":"D","state":"WA","hometown":"Edmonds"},{"first":"Shelley Moore","last":"Capito","party":"R","state":"WV","hometown":"Charleston"},{"first":"Benjamin L.","last":"Cardin","party":"D","state":"MD","hometown":"Baltimore"},{"first":"Thomas R.","last":"Carper","party":"D","state":"DE","hometown":"Wilmington"},{"first":"Robert P.","last":"Casey","party":"D","state":"PA","hometown":"Scranton"},{"first":"Bill","last":"Cassidy","party":"R","state":"LA","hometown":"Baton Rouge"},{"first":"Susan M.","last":"Collins","party":"R","state":"ME","hometown":"Bangor"},{"first":"Christopher A.","last":"Coons","party":"D","state":"DE","hometown":"Wilmington"},{"first":"John","last":"Cornyn","party":"R","state":"TX","hometown":"San Antonio"},{"first":"Catherine","last":"Cortez Masto","party":"D","state":"NV","hometown":"Las Vegas"},{"first":"Tom","last":"Cotton","party":"R","state":"AR","hometown":"Dardanelle"},{"first":"Kevin","last":"Cramer","party":"R","state":"ND","hometown":"Bismarck"},{"first":"Mike","last":"Crapo","party":"R","state":"ID","hometown":"Idaho Falls"},{"first":"Ted","last":"Cruz","party":"R","state":"TX","hometown":"Houston"},{"first":"Steve","last":"Daines","party":"R","state":"MT","hometown":"Bozeman"},{"first":"Tammy","last":"Duckworth","party":"D","state":"IL","hometown":"Hoffman Estates"},{"first":"Richard J.","last":"Durbin","party":"D","state":"IL","hometown":"Springfield"},{"first":"Michael B.","last":"Enzi","party":"R","state":"WY","hometown":"Gillette"},{"first":"Joni","last":"Ernst","party":"R","state":"IA","hometown":"Red Oak"},{"first":"Dianne","last":"Feinstein","party":"D","state":"CA","hometown":"San Francisco"},{"first":"Deb","last":"Fischer","party":"R","state":"NE","hometown":"Valentine"},{"first":"Cory","last":"Gardner","party":"R","state":"CO","hometown":"Yuma"},{"first":"Kirsten E.","last":"Gillibrand","party":"D","state":"NY","hometown":"Troy"},{"first":"Lindsey","last":"Graham","party":"R","state":"SC","hometown":"Seneca"},{"first":"Chuck","last":"Grassley","party":"R","state":"IA","hometown":"New Hartford"},{"first":"Kamala D.","last":"Harris","party":"D","state":"CA","hometown":"Los Angeles"},{"first":"Margaret Wood","last":"Hassan","party":"D","state":"NH","hometown":"Newfields"},{"first":"Josh","last":"Hawley","party":"R","state":"MO","hometown":"Springfield"},{"first":"Martin","last":"Heinrich","party":"D","state":"NM","hometown":"Albuquerque"},{"first":"Mazie K.","last":"Hirono","party":"D","state":"HI","hometown":"Honolulu"},{"first":"John","last":"Hoeven","party":"R","state":"ND","hometown":"Bismarck"},{"first":"Cindy","last":"Hyde-Smith","party":"R","state":"MS","hometown":"Brookhaven"},{"first":"James M.","last":"Inhofe","party":"R","state":"OK","hometown":"Tulsa"},{"first":"Ron","last":"Johnson","party":"R","state":"WI","hometown":"Oshkosh"},{"first":"Doug","last":"Jones","party":"D","state":"AL","hometown":"Birmingham"},{"first":"Tim","last":"Kaine","party":"D","state":"VA","hometown":"Richmond"},{"first":"John","last":"Kennedy","party":"R","state":"LA","hometown":"Madisonville"},{"first":"Angus S.","last":"King","party":"I","state":"ME","hometown":"Brunswick"},{"first":"Amy","last":"Klobuchar","party":"D","state":"MN","hometown":"Minneapolis"},{"first":"James","last":"Lankford","party":"R","state":"OK","hometown":"Edmond"},{"first":"Patrick J.","last":"Leahy","party":"D","state":"VT","hometown":"Middlesex"},{"first":"Mike","last":"Lee","party":"R","state":"UT","hometown":"Alpine"},{"first":"Kelly","last":"Loeffler","party":"R","state":"GA","hometown":"Atlanta"},{"first":"Joe","last":"Manchin","party":"D","state":"WV","hometown":"Charleston"},{"first":"Edward J.","last":"Markey","party":"D","state":"MA","hometown":"Malden"},{"first":"Mitch","last":"McConnell","party":"R","state":"KY","hometown":"Louisville"},{"first":"Martha","last":"McSally","party":"R","state":"AZ","hometown":"Tucson"},{"first":"Robert","last":"Menendez","party":"D","state":"NJ","hometown":"North Bergen"},{"first":"Jeff","last":"Merkley","party":"D","state":"OR","hometown":"Portland"},{"first":"Jerry","last":"Moran","party":"R","state":"KS","hometown":"Manhattan"},{"first":"Lisa","last":"Murkowski","party":"R","state":"AK","hometown":"Girdwood"},{"first":"Christopher","last":"Murphy","party":"D","state":"CT","hometown":"Cheshire"},{"first":"Patty","last":"Murray","party":"D","state":"WA","hometown":"Freeland"},{"first":"Rand","last":"Paul","party":"R","state":"KY","hometown":"Bowling Green"},{"first":"David","last":"Perdue","party":"R","state":"GA","hometown":"Sea Island"},{"first":"Gary C.","last":"Peters","party":"D","state":"MI","hometown":"Bloomfield Hills"},{"first":"Rob","last":"Portman","party":"R","state":"OH","hometown":"Terrace Park"},{"first":"Jack","last":"Reed","party":"D","state":"RI","hometown":"Jamestown"},{"first":"James  E.","last":"Risch","party":"R","state":"ID","hometown":"Boise"},{"first":"Pat","last":"Roberts","party":"R","state":"KS","hometown":"Topeka"},{"first":"Mitt","last":"Romney","party":"R","state":"UT","hometown":"Holladay"},{"first":"Jacky","last":"Rosen","party":"D","state":"NV","hometown":"Henderson"},{"first":"Mike","last":"Rounds","party":"R","state":"SD","hometown":"Fort Pierre"},{"first":"Marco","last":"Rubio","party":"R","state":"FL","hometown":"Miami"},{"first":"Bernard","last":"Sanders","party":"I","state":"VT","hometown":"Burlington"},{"first":"Ben","last":"Sasse","party":"R","state":"NE","hometown":"Fremont"},{"first":"Brian","last":"Schatz","party":"D","state":"HI","hometown":"Honolulu"},{"first":"Charles E.","last":"Schumer","party":"D","state":"NY","hometown":"Brooklyn"},{"first":"Tim","last":"Scott","party":"R","state":"SC","hometown":"Charleston"},{"first":"Rick","last":"Scott","party":"R","state":"FL","hometown":"Naples"},{"first":"Jeanne","last":"Shaheen","party":"D","state":"NH","hometown":"Madbury"},{"first":"Richard C.","last":"Shelby","party":"R","state":"AL","hometown":"Tuscaloosa"},{"first":"Kyrsten","last":"Sinema","party":"D","state":"AZ","hometown":"Phoenix"},{"first":"Tina","last":"Smith","party":"D","state":"MN","hometown":"Minneapolis"},{"first":"Debbie","last":"Stabenow","party":"D","state":"MI","hometown":"Lansing"},{"first":"Dan","last":"Sullivan","party":"R","state":"AK","hometown":"Anchorage"},{"first":"Jon","last":"Tester","party":"D","state":"MT","hometown":"Big Sandy"},{"first":"John","last":"Thune","party":"R","state":"SD","hometown":"Sioux Falls"},{"first":"Thom","last":"Tillis","party":"R","state":"NC","hometown":"Huntersville"},{"first":"Patrick J.","last":"Toomey","party":"R","state":"PA","hometown":"Zionsville"},{"first":"Tom","last":"Udall","party":"D","state":"NM","hometown":"Santa Fe"},{"first":"Chris","last":"Van Hollen","party":"D","state":"MD","hometown":"Kensington"},{"first":"Mark R.","last":"Warner","party":"D","state":"VA","hometown":"Alexandria"},{"first":"Elizabeth","last":"Warren","party":"D","state":"MA","hometown":"Cambridge"},{"first":"Sheldon","last":"Whitehouse","party":"D","state":"RI","hometown":"Newport"},{"first":"Roger F.","last":"Wicker","party":"R","state":"MS","hometown":"Tupelo"},{"first":"Ron","last":"Wyden","party":"D","state":"OR","hometown":"Portland"},{"first":"Todd","last":"Young","party":"R","state":"IN","hometown":"Greenwood"}]);
    let imagelink = "https://theunitedstates.io/images/congress/450x550/C001088.jpg";
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
                    <>
                        <Member
                            image={imagelink}
                            name={data.first + " " + data.last}
                            state={data.state}
                            district={data.district}
                            hometown={data.hometown}
                            party= {returnParty}
                        />
                    </>
                )
            })}

        </div>
    );
}

const Member = ({name, image, state, district, hometown, party}) => {
    let history = useHistory();
    function toProfile(name) {
        history.push("/member/"+ name);
    }
    return (
        <div className="member-card" size="small" style={{ width: 600, paddingTop: '0px'}} onClick={()=>toProfile(name.replace(/\s/g, ''))}>
            
            <div className={party}><h1 className="text-padding">{name}</h1></div>
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