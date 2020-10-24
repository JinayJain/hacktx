import React, { useState, useContext, useEffect } from 'react'
import { Input } from 'antd';
import './styles.css'

const searchKeywords = (keyword) => {
  // find all members
  let members;
  fetch("http://localhost:5000/members")
        .then(res => res.text())
        .then(res => members);
}

const Searchbar = () => {
  return (
    <Input.Search 
      className="keywords"
      size="large"
      placeholder="SEARCH BY KEYWORDS" 
      allowClear 
      style={{ width: '70%' }} 
      onChange={(e) => searchKeywords(e.target.value)}
    />
  )
}

export default Searchbar