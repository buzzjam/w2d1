var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

console.log(getHTML(requestOptions, printLowerCase));

function printLowerCase (html) {
  console.log(html.toLowerCase());
};
