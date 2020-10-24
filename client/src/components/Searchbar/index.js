import React, { useState, useContext, useEffect } from 'react'
import { Input } from 'antd';
import './styles.css'

const searchKeywords = (keywords) => {
  let result = [];
  let keywords_array = keywords.toLowerCase().split(",");

  // find all matching in senate
  let senate = fetch("http://localhost:8080/api/senate/members", {
              headers:{
                  "accepts":"application/json"
              }
        })
        .then(res => res.json())
        .then(data => {
          keywords_array.forEach(keyword => {
            switch(keyword) {
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
                    console.log(member);
                    result.push(member);
                  }
                });
                break;
            }
          });
        });
    
    // find all matching in house
    let house = fetch("http://localhost:8080/api/house/members", {
        headers:{
            "accepts":"application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
      keywords_array.forEach(keyword => {
        switch(keyword) {
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
                console.log(member);
                result.push(member);
              }
            });
            break;
        }
      });
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
      placeholder="SEARCH BY KEYWORDS (NAME, LOCATION, PARTY, HOMETOWN, ETC)" 
      allowClear 
      style={{ width: '70%' }} 
      onKeyDown={handleKeyDown}
      onChange={(e) => handleChange(e.target.value)}
    />
  )
}

export default Searchbar