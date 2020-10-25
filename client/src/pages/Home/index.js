import React, { useContext, useEffect, useState } from 'react'
import logo from '../../logo.svg';
import other_logo from './rightsdemocracy_vermont.png';
import './styles.css'
import Vote from '../../components/Vote'
import { Searchbar } from '../../components/Searchbar'
import Members from '../../components/Card/card';
import MapComponent from '../../components/Map/MapComponent'
import { Layout, Row, Col, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
  const resultRef = React.useRef(null)
  const mapRef = React.useRef(null)

  const [data, setData] = useState([{"first":"Lamar","last":"Alexander","party":"R","state":"TN","hometown":"Maryville"}])

  const scrollToResult = () => {
    resultRef.current.scrollIntoView({ 
      behavior: "smooth", 
      block: "nearest"
    })
  }
  const scrollToMaps = () => {
    mapRef.current.scrollIntoView({ 
      behavior: "smooth", 
      block: "nearest"
    })
  }

  const searchForAll = () => {
    let result = [];
    let senate = fetch("http://localhost:8080/api/senate/members", {
                headers:{
                    "accepts":"application/json"
                }
          })
          .then(res => res.json())
          .then(data => {
                data.forEach(member => {
                  result.push(member);
                });
              });
      let house = fetch("http://localhost:8080/api/house/members", {
          headers:{
              "accepts":"application/json"
          }
      })
      .then(res => res.json())
      .then(data => {
        data.forEach(member => {
          result.push(member);
        });
      });
    console.log("result: " + result);
    setData(result);
    scrollToResult();
    return result;
  }

  return (
    <Content>
        <Vote/>
        <div id="cover_section">
          <img id="logo" src={logo}/>
          <h1>The Politician Index needed to keep representatives accountable.</h1>
          <Searchbar setData={setData} scrollToResult={scrollToResult}/>
          <br/>
          <Row>
            <Button
              className="blueButton" 
              size="large" 
              type="primary"
              onClick={scrollToMaps}
            >FILTER BY REGION</Button>
            <Button
              className="redButton" 
              size="large" 
              type="primary"
              onClick={searchForAll}
            >BROWSE ALL DATA</Button>
          </Row>
        </div>
        <div id="info_section">
        <div className="right">
            <h1>Politicians! Gotta Catch Their Crimes!</h1>
            <p>With the divided government we have come to known today, social policies and reform have never been more important.
              The fact that many of our politicians that we choose to lie to the general public about their actions makes the situation even worse. 
              <b> As it currently stands, there is no easy way to keep track of what politicians are doing in the House and the Senate. . . until now.</b>
            </p>
            <p>
              Introducing Polídex! Drawing inspiration from the Pokédex, Polídex aims to track all the actions of politicians in office
              so you can stay informed, combatting <b>corruption</b> and <b>misinformation</b>.
            </p>
          </div>
          <div className="left">
            <br/><br/>
            <img src={other_logo} />
            <h5>By Rights & Democracy: Vermont</h5>
          </div>
        </div>
        <div id="map_section" ref={mapRef}>
          <h1>Filter by location </h1>
          <Maps/>
        </div>
        <div id="result_section" ref={resultRef}>
          <h1>Search Result</h1>
          <Members array={data}/>
        </div>
    </Content>
  )
}

export default Home

const Maps = () => {
  const US_BOUNDS = {
      north: 55,
      south: 25,
      east: -60,
      west: -140
  };   
  const ALASKA_BOUNDS = {
      north: 75,
      south: 50,
      east: -135,
      west: -175
  };   
  const HAWAII_BOUNDS = {
      north: 25,
      south: 15,
      east: -150,
      west: -165
  }
  const containerUSConnected = {
      width: '60vw',
      height: '80vh'
  };
  const containerAlaskaHawaii = {
      width: '30vw',
      height: '30vh'
  };
  return ( <>
      <Row>
          <Col span={16}>
              <MapComponent containerStyle={containerUSConnected} defaultZoom={4} center={ {  lat: 40.78, lng: -101.76 }} borderBounds={US_BOUNDS}/>
          </Col>
          <Col span={8}>
              <br/><br/><br/>
              <MapComponent containerStyle={containerAlaskaHawaii} defaultZoom={4} center={ {  lat: 61.37, lng: -152.40 }} borders={ALASKA_BOUNDS}/>
              <br/>
              <MapComponent containerStyle={containerAlaskaHawaii} defaultZoom={6} center={ {  lat: 21.09, lng: -157.49 }} borders={HAWAII_BOUNDS}/>
          </Col>
      </Row>
      </>
  )
}