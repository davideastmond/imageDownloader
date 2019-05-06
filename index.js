/** Scripting HTTP requests w/ the Request Package assignment */

var request = require("request");
var fs = require('fs');
var site = "https://sytantris.github.io/http-examples/";

// example of 'chained functions'
request.get(site)
  .on('error', (err)=> {
    throw err;
  })

  .on('response', (response)=> {
    console.log("Response status code ", response.statusCode);
  })

  .pipe(fs.createWriteStream('./downloaded.html')); 
  // Pipes are an interfact to convert between readable and writable streams.