import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Searchbar from '../../components/Searchbar'
import './styles.css'
import logo from '../../logo.svg'

import { Layout } from 'antd';
import { Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
  return (
    <Content>
        <div className="cover">
            <img id="logo" src={logo}/>
            <h1>The Politician Index needed to keep representatives accountable.</h1>
            <Searchbar/>
            <br/>
            
            <Button size="large" type="primary">FILTER BY REGION</Button>
            <Button size="large" type="primary">BROWSE ALL DATA</Button>
        </div>
    </Content>
  )
}

export default Home
