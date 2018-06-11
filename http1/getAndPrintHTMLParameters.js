var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTMLParameters (options) {
  https.get(options, function(response){
    var body = "";
    response.setEncoding('utf8');

    response.on('data', function (data) {
      for (var i = 0; i < data.length; i++) {
        body += data[i];
      }
    });

    response.on('end', function() {
      console.log('Data pulled.');
      console.log(body);
    }); 

  });
}

console.log(getAndPrintHTMLParameters(requestOptions))