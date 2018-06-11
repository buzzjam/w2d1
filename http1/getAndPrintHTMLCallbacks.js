var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

  https.get(options, function(response){
    var body = "";
    response.setEncoding('utf8');

    response.on('data', function (data) {
      for (var i = 0; i < data.length; i++) {
        body += data[i];
      }
    });

    response.on('end', function() {
      callback(body);
    }); 

  });

}

function printHTML (html) {
  console.log(html);
}

console.log(getHTML(requestOptions, printHTML));