import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Searchbar from '../../components/Searchbar'
import './styles.css'
import logo from '../../logo.svg'

import { Layout } from 'antd';
import { Button } from 'antd';
import { Row, Col } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
  return (
    <Content>
        <div className="cover_section">
          <img id="logo" src={logo}/>
          <h1>The Politician Index needed to keep representatives accountable.</h1>
          <Searchbar/>
          <br/>
          <Row>
            <Button className="blueButton" size="large" type="primary">FILTER BY REGION</Button>
            <Button className="redButton" size="large" type="primary">BROWSE ALL DATA</Button>
          </Row>
        </div>
        <div className="info_section">
          <h1>WOW! INfoRmaTiON!</h1>
        </div>
        <div className="map_section">
          <h1>WOW! map!</h1>
        </div>
        <div className="result_section">
          <h1>Search Result</h1>
        </div>
    </Content>
  )
}

export default Home
