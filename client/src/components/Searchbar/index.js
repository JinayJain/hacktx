import React, { useState, useContext, useEffect } from 'react'
import { Input } from 'antd';
import './styles.css'

const searchKeywords = (keywords) => {
  let result = [];
  keywords = keywords.toLowerCase();

  // find all matching in senate
  let senate = fetch("http://localhost:8080/api/senate/members", {
              headers:{
                  "accepts":"application/json"
              }
        })
        .then(res => res.json())
        .then(data => {
          switch(keywords) {
            case("democrat"): 
              data.forEach(member => {
                // if keyword matches
                if (member.party == "D") {
                  console.log(member);
                  result.push(member);
                }
              });
              break;
            case("republican"): 
              data.forEach(member => {
                // if keyword matches
                if (member.party == "R") {
                  console.log(member);
                  result.push(member);
                }
              });
              break;
            case("independent"): 
              data.forEach(member => {
                // if keyword matches
                if (member.party == "I") {
                  console.log(member);
                  result.push(member);
                }
              });
              break;
            default:
              data.forEach(member => {
                // if keyword matches
                let member_string = JSON.stringify(member).toLowerCase();
                if (member_string.includes(keywords)) {
                  console.log(member);
                  result.push(member);
                }
              });
              break;
          }
        });
    
    // find all matching in house
    let house = fetch("http://localhost:8080/api/house/members", {
        headers:{
            "accepts":"application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
    switch(keywords) {
      case("democrat"): 
        data.forEach(member => {
          // if keyword matches
          if (member.party == "D") {
            console.log(member);
            result.push(member);
          }
        });
        break;
      case("republican"): 
        data.forEach(member => {
          // if keyword matches
          if (member.party == "R") {
            console.log(member);
            result.push(member);
          }
        });
        break;
      case("independent"): 
        data.forEach(member => {
          // if keyword matches
          if (member.party == "I") {
            console.log(member);
            result.push(member);
          }
        });
        break;
      default:
        data.forEach(member => {
          // if keyword matches
          let member_string = JSON.stringify(member).toLowerCase();
          if (member_string.includes(keywords)) {
            console.log(member);
            result.push(member);
          }
        });
        break;
    }
    });
  console.log(keywords);
}

const Searchbar = () => {

  const initialSearchData = Object.freeze({
    keywords: "",
  });

  const [formData, updateFormData] = React.useState(initialSearchData);

  const handleChange = (event) => {
    console.log("EVENT: "+ event);
    updateFormData({
        ...formData,
        // Trimming any whitespace
        keywords: document.getElementById("keywords").value.trim()
      });
  }

  const handleKeyDown = (event) => {
    console.log(event);
    if (event.key === 'Enter') {
      searchKeywords(formData.keywords);
    }
  }

  return (
    <Input.Search 
      className="keywords"
      id="keywords"
      size="large"
      placeholder="SEARCH BY KEYWORDS" 
      allowClear 
      style={{ width: '70%' }} 
      onKeyDown={handleKeyDown}
      onChange={(e) => handleChange(e.target.value)}
    />
  )
}

export default Searchbar