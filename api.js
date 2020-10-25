const api = require("axios").default;
api.defaults.headers['X-API-Key'] = process.env.API_KEY;
const xml2js = require("xml2js");
const parseXML = new xml2js.Parser({ explicitArray: false, trim: true }).parseString;

module.exports = { api, parseXML };
