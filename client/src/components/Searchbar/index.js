import React, { useState, useContext, useEffect } from 'react'
import { Input } from 'antd';
import './styles.css'

const searchKeywords = (keyword) => {
  // find all members
  let senate = fetch("http://localhost:3000/api/senate/members")
        .then(res => res.json());
  console.log(senate);
  senate.forEach(member => {
    console.log(member);
  });
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