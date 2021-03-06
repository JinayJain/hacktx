import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  FacebookFilled,
  LinkOutlined,
  LoadingOutlined,
  QuestionCircleTwoTone,
  ReadOutlined,
  TwitterSquareFilled,
  ArrowLeftOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Slider, InputNumber, Row, Col, Button, Menu  } from 'antd';
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MapComponent from "../../components/Map/MapComponent";
import firebase from "firebase";
import app from "../../base";
import "./styles.css";

const IntegerStep = (props) => {
  const submitInput = useCallback(async (val, rating, times, id) => {
    const db = app.database().ref().child('rating').child(id).set({
      value : (rating * times + val) / (times + 1),
      amount : (times + 1)
    })
  })

  const [inputValue, setInputValue] = useState(1);

  return (
    <Row style={{ margin: "auto"}}>
      <Col offset={5} span={12}>
        <Slider
          min={1}
          max={10}
          onChange={setInputValue}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={10}
          style={{ margin: '0 16px' }}
          value={inputValue}
          onChange={setInputValue}
          onPressEnter={() => {submitInput(inputValue, props.rating, props.amount, props.id)}}
        />
      </Col>
      <Button type="primary" shape="round" onClick={() => {submitInput(inputValue, props.rating, props.amount, props.id)}}> Submit </Button>
    </Row>
  );
}

let stateCoords = {
  AK: [63.588753, -154.493062],
  AL: [32.318231, -86.902298],
  AR: [35.20105, -91.831833],
  AZ: [34.048928, -111.093731],
  CA: [36.778261, -119.417932],
  CO: [39.550051, -105.782067],
  CT: [41.603221, -73.087749],
  DC: [38.905985, -77.033418],
  DE: [38.910832, -75.52767],
  FL: [27.664827, -81.515754],
  GA: [32.157435, -82.907123],
  HI: [19.898682, -155.665857],
  IA: [41.878003, -93.097702],
  ID: [44.068202, -114.742041],
  IL: [40.633125, -89.398528],
  IN: [40.551217, -85.602364],
  KS: [39.011902, -98.484246],
  KY: [37.839333, -84.270018],
  LA: [31.244823, -92.145024],
  MA: [42.407211, -71.382437],
  MD: [39.045755, -76.641271],
  ME: [45.253783, -69.445469],
  MI: [44.314844, -85.602364],
  MN: [46.729553, -94.6859],
  MO: [37.964253, -91.831833],
  MS: [32.354668, -89.398528],
  MT: [46.879682, -110.362566],
  NC: [35.759573, -79.0193],
  ND: [47.551493, -101.002012],
  NE: [41.492537, -99.901813],
  NH: [43.193852, -71.572395],
  NJ: [40.058324, -74.405661],
  NM: [34.97273, -105.032363],
  NV: [38.80261, -116.419389],
  NY: [43.299428, -74.217933],
  OH: [40.417287, -82.907123],
  OK: [35.007752, -97.092877],
  OR: [43.804133, -120.554201],
  PA: [41.203322, -77.194525],
  PR: [18.220833, -66.590149],
  RI: [41.580095, -71.477429],
  SC: [33.836081, -81.163725],
  SD: [43.969515, -99.901813],
  TN: [35.517491, -86.580447],
  TX: [31.968599, -99.901813],
  UT: [39.32098, -111.093731],
  VA: [37.431573, -78.656894],
  VT: [44.558803, -72.577841],
  WA: [47.751074, -120.740139],
  WI: [43.78444, -88.787868],
  WV: [38.597626, -80.454903],
  WY: [43.075968, -107.290284],
};

const Divider = () => <hr style={{ border: "1px solid #ccc" }} />;

const BillCard = ({ bill }) => {
  let voteIndicator =
    bill.position === "Yes" ? (
      <CheckCircleTwoTone twoToneColor="#52c41a" className="voteIndicator" />
    ) : bill.position === "No" ? (
      <CloseCircleTwoTone twoToneColor="#e35d68" className="voteIndicator" />
    ) : (
      <QuestionCircleTwoTone className="voteIndicator" />
    );
    console.log(bill);
  return (
    
    <a href={"https://www.congress.gov/search?q={%22congress%22:[%22116%22],%22source%22:%22all%22,%22search%22:%22"+bill.bill.bill_id +"%22}" }>

    <div className="billCard">
      <div>
        <h3>{bill.description}</h3>
        <p>{bill.date}</p>
      </div>
      <div>{voteIndicator}</div>
    </div>
    </a>
  );
};

const ArticleCard = ({ article }) => (
  <div className="articleCard">
    <ReadOutlined style={{ fontSize: "50px", padding: "0 20px" }} />
    <div>
      <h3>{article.title}</h3>
      <a href={article.link}>{article.source["$"].url}</a>
    </div>
  </div>
);

function Profile() {
  let { id } = useParams();
  const [member, setMember] = useState({});
  const [ratings, setRatings] = useState(null);
  const [amount, setAmount] = useState(null);

  useEffect(() => {
    fetch(`/api/members/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMember(res);
      });

    const db = app.database().ref().on('value', (snapshot) => {
      const curRating = snapshot.val()['rating'];
      if (!(id in curRating)) {}
      else {
         setRatings(curRating[id].value); 
         setAmount(curRating[id].amount);
      } 
    })

  }, [id]);

  const US_BOUNDS = {
    north: 55,
    south: 25,
    east: -60,
    west: -140,
  };

  return (
    <div className="profileContainer">
      <Menu mode="horizontal">
          <Link to="/home">
            <Menu.Item key="back" size="large" icon={<ArrowLeftOutlined />}>
              Back
            </Menu.Item>
          </Link>
        </Menu>
        <br/>
      <div style={{ display: "flex" }}>
        <img
          src={`https://theunitedstates.io/images/congress/450x550/${id}.jpg`}
          alt=""
          className="memberImage"
        />
        {member.state && (
          <MapComponent
            containerStyle={{ height: "auto", flex: 1, marginLeft: "40px" }}
            center={{
              lat: stateCoords[member.state][0],
              lng: stateCoords[member.state][1],
            }}
            bounds={US_BOUNDS}
            defaultZoom={7}
          />
        )}
      </div>
      <h1 className="memberName">
        {member.short_title} {member.first_name} {member.last_name} (
        {member.party})
      </h1>
      <h3 className="memberTagline">{member.state}</h3>

      <div className="memberLinks">
        {member.twitter_account && (
          <a
            href={`https://twitter.com/${member.twitter_account}`}
            target="__blank"
          >
            <TwitterSquareFilled />
          </a>
        )}
        {member.facebook_account && (
          <a
            href={`https://facebook.com/${member.facebook_account}`}
            target="__blank"
          >
            <FacebookFilled />
          </a>
        )}
        <a href={member.url} target="__blank">
          <LinkOutlined />
        </a>
      </div>

      <Divider />

      <div>
        <h2 style={{ textAlign: "center" }}>Polídex Reliability Score</h2>
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              width: "80%",
              height: "10px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              margin: "auto",
              borderRadius: "3px",
              position: "relative",
            }}
          >
            {member.votes_with_party_pct && (
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  position: "absolute",
                  backgroundColor: "#88cc54",
                  borderRadius: "50%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: member.votes_with_party_pct.toString() + "%",
                }}
              ></div>
            )}
          </div>

          {member.votes_with_party_pct && (
            <h3 style={{ textAlign: "center", marginTop: "15px" }}>
              This congressperson votes with their party{" "}
              {member.votes_with_party_pct.toString() + "%"} of the time.
            </h3>
          )}
        </div>
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>User Reliability Score</h2>
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              width: "80%",
              height: "10px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              margin: "auto",
              borderRadius: "3px",
              position: "relative",
            }}
          >
            {ratings && (
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  position: "absolute",
                  backgroundColor: "#88cc54",
                  borderRadius: "50%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: (ratings*10).toFixed(2) + "%",
                }}
              ></div>
            )}
          </div>

          {ratings && (
            <h3 style={{ textAlign: "center", marginTop: "15px" }}>
              This congressperson is considered {" "}
              {(ratings*10).toFixed(2)+ "%"} reliable according to user reviews.
            </h3>
          )}
          {!ratings && (
            <h3 style={{ textAlign: "center", marginTop: "15px" }}>
              This congressperson has no user reviews.
            </h3>
          )}
        </div>
      </div>

      <div>
        <h3 style={{ textAlign: "center", marginTop: "15px" }}>How Reliable Is This Person?</h3>
        <IntegerStep id={id} rating={ratings} amount={amount}/>
      </div>

      <Divider />
      <div>
        <h1>Voting History</h1>
        <div className="billBox">
          {member.votes &&
            member.votes.map((b, i) => <BillCard key={i} bill={b} />)}
        </div>
      </div>
      <br />
      <Divider />
      <div className="news">
        <h1>
          {member.first_name} {member.last_name} in the News
        </h1>
        <div className="newsBox">
          {member.news &&
            member.news.map((article, i) => (
              <ArticleCard key={i} article={article} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
