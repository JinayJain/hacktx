const router = require("express").Router();
const { api, parseXML } = require("../api");

let members;

let votes = [];
let data = [];
let votingdata = {};
for(k=600; k<605; k++){
  api.get(`https://clerk.house.gov/evs/2019/roll${k}.xml`).then((res => {
    parseXML(res.data, (err, parsed) => {
      let bill = {'id': parsed['rollcall-vote']['vote-metadata']['legis-num'], 'title': parsed['rollcall-vote']['vote-metadata']['vote-desc']}
      for(i=0; i<parsed['rollcall-vote']['vote-data']['recorded-vote'].length; i++) {
        votes.push([parsed['rollcall-vote']['vote-data']['recorded-vote'][i]['legislator']['$']['name-id'], parsed['rollcall-vote']['vote-data']['recorded-vote'][i]['vote']])
      }
      //console.log(votes);
      data.push({'bill': bill, 'votes': votes});

    for( i=0; i<votes.length; i++) {
      if (!(data[0].votes[i][0] in votingdata)) votingdata[data[0].votes[i][0]]=[];
      votingdata[data[0].votes[i][0]].push({'bill': data[0].bill, 'vote': data[0].votes[i][1]});
    }
    console.log(votingdata);
    });
  }));
  
} 


api.get("https://clerk.house.gov/xml/lists/MemberData.xml").then((res) => {
  parseXML(res.data, (err, data) => {
    members = data.MemberData.members.member
      .map((rep) => ({
        first: rep['member-info'].firstname,
        last: rep['member-info'].lastname,
        party: rep['member-info'].party,
        state: rep['member-info'].state['$']['postal-code'],
        hometown: rep['member-info'].townname,
        district: rep.statedistrict
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
