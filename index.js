require('dotenv').config();

const PORT = process.env.PORT || 8080;

const express = require('express');
const cors = require('cors');
const path = require('path');

const membersRouter = require('./routes/members');
const senateRouter = require('./routes/senate');
const houseRouter = require('./routes/house');
const { api, parseXML } = require('./api');

var app = express();
var apiRouter = express.Router();

app.set('trust proxy', true);
app.use(cors());

// stays before everything
// ----------------------
app.use(express.static(path.join(__dirname, "client/build")))
// ----------------------

app.use('/api', apiRouter)
apiRouter.use('/members', membersRouter);
apiRouter.use('/senate', senateRouter);
apiRouter.use('/house', houseRouter);

// stays after everything
// ----------------------
app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "client/build/index.html")));
// ----------------------

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

