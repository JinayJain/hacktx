import React, { useContext, useEffect, useState } from 'react'
import logo from '../../logo.svg'

import './styles.css'
import Searchbar from '../../components/Searchbar'

import { Layout } from 'antd';
import { Button } from 'antd';
import { Row, Col } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
  const resultRef = React.useRef(null);
  const mapRef = React.useRef(null);

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
          <Searchbar/>
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
          <h1>WOW! map!</h1>
          
        </div>
        <div id="result_section" ref={resultRef}>
          <h1>Search Result</h1>
        </div>
    </Content>
  )
}

export default Home
