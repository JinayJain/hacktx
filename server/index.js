const PORT = 3001;

const express = require('express');
const cors = require('cors');

const senateRouter = require('./routes/senate');
const houseRouter = require('./routes/house');
const { api, parseXML } = require('./api');

var app = express();

app.use(cors());

app.use('/senate', senateRouter);
app.use('/house', houseRouter);


// Getting bill data
api.get("https://www.govinfo.gov/bulkdata/xml/BILLS/115/1/hjres").then((res) => {
  parseXML(res.data, (err, parsed) => {
    //console.log(parsed.data.files);
    let bill_data = parsed.data.files.file;
    //console.log(bill_data);
    bill_data.forEach(entry => {
      let label = entry.displayLabel.slice(9);
      if (label.includes("119")) { //REPLACE THIS W/ BILL #
        console.log(entry.link);
        //<dc:title>
        api.get(entry.link).then((res) => {
          parseXML(res.data, (err, parsed) => {
            console.log("title: " + parsed.resolution.form["official-title"]._);
            console.log("publisher:" + parsed.resolution.metadata.dublinCore['dc:publisher']);
            console.log("date:" + parsed.resolution.metadata.dublinCore['dc:date']);
            console.log(parsed.resolution["resolution-body"]);
          });
        });
      }
    })
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

