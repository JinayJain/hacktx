const router = require("express").Router();
const { api, parseXML } = require("../api");

let members;

api.get("https://www.senate.gov/legislative/LIS_MEMBER/cvc_member_data.xml").then((res) => {
  parseXML(res.data, (err, data) => {
    members = data.senators.senator.map(sen => ({
      first: sen.name.first,
      last: sen.name.last,
      party: sen.party,
      state: sen.state,
      hometown: sen.homeTown
    }));
  })
});

router.get("/members", (req, res) => {
  res.json(members);
});

module.exports = router;

/**
 * Senate: https://www.senate.gov/general/XML.htm
 *
 * Member data: https://www.senate.gov/legislative/LIS_MEMBER/cvc_member_data.xml
 *
 * House of Representatives: https://xml.house.gov/
 *
 * Member data: https://clerk.house.gov/xml/lists/MemberData.xml
 */
