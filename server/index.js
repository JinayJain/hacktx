const axios = require("axios").default;
const xml2js = require("xml2js");

const parser = new xml2js.Parser({ explicitArray: false });
axios.get("https://clerk.house.gov/xml/lists/MemberData.xml").then((res) => {
  parser.parseString(res.data, (err, parsed) => {
    console.log(parsed.MemberData.members.member[0]);
  });
});

axios.get("https://www.govinfo.gov/bulkdata/xml/BILLS/115/1/hjres").then((res) => {
  parser.parseString(res.data, (err, parsed) => {
    console.log(parsed.data.files);
  });
});

let array = [];
for(i=600; i<700; i++){
  axios.get(`https://clerk.house.gov/evs/2019/roll${i}.xml`).then((res => {
    parser.parseString(res.data, (err, parsed) => {
      console.log(parsed['rollcall-vote']['vote-metadata']['legis-num']);
      for(i=0; i<parsed['rollcall-vote']['vote-data']['recorded-vote'].length; i++) {
        if (parsed['rollcall-vote']['vote-data']['recorded-vote'][i]['vote'] == "Not Voting") {

        
        array.push([parsed['rollcall-vote']['vote-data']['recorded-vote'][i]['legislator']['$']['name-id'], parsed['rollcall-vote']['vote-data']['recorded-vote'][i]['vote']])
        }
      }
      console.log(array);
    });
  }));
}