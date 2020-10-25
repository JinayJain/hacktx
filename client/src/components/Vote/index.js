import React, { useState, useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './styles.css'
import { Layout, Row, Col, Button, notification} from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

const Vote = () => {
  const openNotification = () => {
    notification.open({
      message: 'Support Us, Support the Country',
      description:
        'We want to help you vote! Check your registration status at vote.org',
      icon: <HeartOutlined style={{ color: '#AD0000' }} />,
      duration: 0,
      onClick: () => {
        console.log('Notification Clicked!');
        window.open("https://www.vote.org/", '_blank');
      },
    });
  };
  return (
    <Button id="voteButton" onClick={openNotification}>
      Vote
    </Button>
  )
}

export default Vote
