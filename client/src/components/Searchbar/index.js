import React, { useState, useContext, useEffect } from 'react'
import { Row, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './styles.css'

export const Searchbar = ({ setData, scrollToResult }) => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch('/api/members').then(res => res.json()).then(res => {
      setMembers(res);
    });
  }, []);

  const searchKeywords = (keywords) => {
    let result = [];
    let keywords_array = keywords.toLowerCase().split(/[ ,]+/);
    console.log(keywords_array);
      keywords_array.forEach(keyword => {
      switch(keyword) {
        case("democrat"): 
          members.forEach(member => {
            // if keyword matches
            if (member.party === "D") {
              //console.log(member);
              result.push(member);
            }
          });
          break;
        case("republican"): 
          members.forEach(member => {
            // if keyword matches
            if (member.party === "R") {
              //console.log(member);
              result.push(member);
            }
          });
          break;
        case("independent"): 
          members.forEach(member => {
            // if keyword matches
            if (member.party === "I") {
              //console.log(member);
              result.push(member);
            }
          });
          break;
        default:
          members.forEach(member => {
            // if keyword matches
            //let member_string = JSON.stringify(member).toLowerCase();
            let member_string = member.title + member.state + member.first_name + member.last_name;
            member_string = member_string.toLowerCase();
            console.log(typeof member_string);
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
    console.log("result: " + result);
    return result;
  }

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
  const searchAndSetData = () => {
    let data = searchKeywords(formData.keywords);
    console.log(data);
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
        placeholder="Search by Keywords (e.g. name, location, party, etc)" 
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