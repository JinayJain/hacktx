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
        <div className="cover">
            <img id="logo" src={logo}/>
            <h1>The Politician Index needed to keep representatives accountable.</h1>
            <Searchbar/>
            <br/>
            <Row>
              <Button className="blueButton" size="large" type="primary">FILTER BY REGION</Button>
              <Button className="redButton" size="large" type="primary">BROWSE ALL DATA</Button>
            </Row>
        </div>
    </Content>
  )
}

export default Home
