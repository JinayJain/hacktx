import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Searchbar from '../../components/Searchbar'
import './styles.css'
import logo from '../../logo.svg'

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
  return (
    <Content>
        <div className="cover">
            <img src={logo}/>
            <Searchbar/>
        </div>
    </Content>
  )
}

export default Home
