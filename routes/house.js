const router = require("express").Router();
const { api, parseXML } = require("../api");

let members;

api.get("https://clerk.house.gov/xml/lists/MemberData.xml").then((res) => {
  parseXML(res.data, (err, data) => {
    members = data.MemberData.members.member
      .map((rep) => rep["member-info"])
      .map((rep) => ({
        first: rep.firstname,
        last: rep.lastname,
        party: rep.party,
        state: rep.state['$']['postal-code'],
        hometown: rep.townname
      }));
  });
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
