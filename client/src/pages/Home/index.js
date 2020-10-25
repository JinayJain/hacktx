import React, { useContext, useEffect, useState } from 'react'
import logo from '../../logo.svg'
import Members from '../../components/Card/card';

import './styles.css'
import Members from '../../components/Card/card'
import Searchbar from '../../components/Searchbar'
import MapComponent from '../../components/Map/MapComponent'

import { Layout } from 'antd';
import { Button } from 'antd';
import { Row, Col } from 'antd';

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

  return (
    <Content>
        <div className="cover_section">
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
              onClick={scrollToResult}
            >BROWSE ALL DATA</Button>
          </Row>
        </div>
        <div id="info_section">
          <h1>WOW! INfoRmaTiON!</h1>
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
              <MapComponent containerStyle={containerAlaskaHawaii} defaultZoom={5} center={ {  lat: 61.370716, lng: -152.404419 }} borders={ALASKA_BOUNDS}/>
              <br/>
              <MapComponent containerStyle={containerAlaskaHawaii} defaultZoom={6} center={ {  lat: 21.094318, lng: -157.498337 }} borders={HAWAII_BOUNDS}/>
          </Col>
      </Row>
      </>
  )
}