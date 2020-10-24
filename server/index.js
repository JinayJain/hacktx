const PORT = 3001;

const express = require('express');
const cors = require('cors');

const senateRouter = require('./routes/senate');
const houseRouter = require('./routes/house');

var app = express();

app.use(cors());

app.use('/senate', senateRouter);
app.use('/house', houseRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

