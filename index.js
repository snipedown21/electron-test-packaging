const config = require('./config.js').config;
const $ = require('jquery');

function appendConstantToHTML() {
  $('#root').html(JSON.stringify(config));
}

appendConstantToHTML();
