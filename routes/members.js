const router = require('express').Router();
const { api, parseXML } = require('../api');

let members = [];
let maxArticles = 5;

// get senators
api.get('https://api.propublica.org/congress/v1/116/senate/members.json').then(res => {
  console.log("got senators");
  members = members.concat(res.data.results[0].members);
})

// get house members
api.get('https://api.propublica.org/congress/v1/116/house/members.json').then(res => {
  console.log("got house members");
  members = members.concat(res.data.results[0].members);
})
router.get('/', (req, res) => {
  res.json(members);
});

router.get('/:id', async (req, res) => {

  let response = {};

  let memberData = members.find(mem => mem.id === req.params.id);
  response = memberData;

  const voteResult = await api.get(`https://api.propublica.org/congress/v1/members/${req.params.id}/votes.json`);
  response.votes = voteResult.data.results[0].votes;

  const result = await api.get(`https://news.google.com/rss/search?q=${memberData.first_name}+${memberData.last_name}`)
  parseXML(result.data, (err, xml) => {
    response.news = xml.rss.channel.item.slice(0, maxArticles);
    res.json(response);
  })
})

module.exports = router;