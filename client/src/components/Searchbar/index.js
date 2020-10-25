import React, { useState, useContext, useEffect } from 'react'
import { Row, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './styles.css'

const searchKeywords = async (keywords) => {
  let result = [];
  let keywords_array = keywords.toLowerCase().split(/[ ,]+/);
  console.log(keywords_array);

  // find all matching in senate
  let res = await fetch("/api/senate/members", {
              headers:{
                  "accepts":"application/json"
              }
        });
  let data = await res.json();
  console.log("ran");
  console.log(data);
  keywords_array.forEach(keyword => {
  switch(keyword) {
    case("democrat"): 
      data.forEach(member => {
        // if keyword matches
        if (member.party === "D") {
          //console.log(member);
          result.push(member);
        }
      });
      break;
    case("republican"): 
      data.forEach(member => {
        // if keyword matches
        if (member.party === "R") {
          //console.log(member);
          result.push(member);
        }
      });
      break;
    case("independent"): 
      data.forEach(member => {
        // if keyword matches
        if (member.party === "I") {
          //console.log(member);
          result.push(member);
        }
      });
      break;
    default:
      data.forEach(member => {
        // if keyword matches
        let member_string = JSON.stringify(member).toLowerCase();

        // if they included a space (e.g. John Smith), make sure to split and both exist
        let segments = keyword.split(" ");
        let matches = false;

        segments.forEach(seg => {
          if (member_string.includes(seg)) {
            matches = true;
          }
          else {
            matches = false;
          }
        });
        
        if (matches) {
          //console.log(member);
          result.push(member);
        }
      });
      break;
  }});
          
  // find all matching in house
  res = await fetch("/api/house/members", {
      headers:{
          "accepts":"application/json"
      }
  });
  data = await res.json();
  keywords_array.forEach(keyword => {
    switch(keyword) {
      case("democrat"): 
        data.forEach(member => {
          // if keyword matches
          if (member.party === "D") {
            //console.log(member);
            result.push(member);
          }
        });
        break;
      case("republican"): 
        data.forEach(member => {
          // if keyword matches
          if (member.party === "R") {
            //console.log(member);
            result.push(member);
          }
        });
        break;
      case("independent"): 
        data.forEach(member => {
          // if keyword matches
          if (member.party === "I") {
            //console.log(member);
            result.push(member);
          }
        });
        break;
      default:
        data.forEach(member => {
          // if keyword matches
          let member_string = JSON.stringify(member).toLowerCase();

          // if they included a space (e.g. John Smith), make sure to split and both exist
          let segments = keyword.split(" ");
          let matches = false;

          segments.forEach(seg => {
            if (member_string.includes(seg)) {
              matches = true;
            }
            else {
              matches = false;
            }
          });
          
          if (matches) {
            //console.log(member);
            result.push(member);
          }
        });
        break;
    }});
  console.log("ur gay");
  console.log("result: " + result);
  return result;
}

const Searchbar = ({ setData, scrollToResult }) => {
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
      searchAndSetData();
    }
  }
  const searchAndSetData = async () => {
    let data = await searchKeywords(formData.keywords);
    console.log(data);
    console.log("setData: " + setData());
    setData(data);
    console.log("scrolltoresult: " + scrollToResult);
    scrollToResult();
  }
  return (
    <>
    <Row>
    <Input 
        className="keywords"
        id="keywords"
        size="large"
        placeholder="SEARCH BY KEYWORDS (NAME, LOCATION, PARTY, HOMETOWN, ETC)" 
        allowClear 
        style={{ width: '60%' }} 
        onKeyDown={handleKeyDown}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Button 
        onClick={searchAndSetData}
        style={{ height: '75px'}}
      >
        <SearchOutlined style={{ fontSize: '250%', color: '#002761'}}/>
      </Button>
    </Row>
    </>
  )
}
export default Searchbar