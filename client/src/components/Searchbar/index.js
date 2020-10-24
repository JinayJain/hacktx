import React, { useState, useContext, useEffect } from 'react'
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Searchbar = () => {
  return (
    <div>
        Search Bar wow
        <Input size="large" placeholder="SEARCH BY KEYWORDS" suffix={<UserOutlined />} />
        <br />
    </div>
  )
}

export default Searchbar