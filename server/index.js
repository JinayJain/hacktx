const axios = require("axios").default;
const xml2js = require("xml2js");

const parser = new xml2js.Parser({ explicitArray: false });

axios.get("https://clerk.house.gov/xml/lists/MemberData.xml").then((res) => {
  parser.parseString(res.data, (err, parsed) => {
    console.log(parsed.MemberData.members.member[0]);
  });
});