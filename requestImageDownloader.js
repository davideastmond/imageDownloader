var request = require("request");
var fs = require('fs');
var site = "https://sytantris.github.io/http-examples/future.jpg";

// example of 'chained functions'
request.get(site)
  .on('error', (err)=> {
    throw err;
  })
  
  .on('request', ()=> {
    // Initiate the request
    console.log("Getting image...");
  })

  .on('response', (response)=> {
    console.log("Response status code ", response.statusCode);
    console.log("Response message ", response.statusMessage);
    console.log("Headers, content type: ", response.headers["content-type"]);
  })

  .on('end', ()=> {
    // download complete - show status message
    console.log("download complete");
  })

  .pipe(fs.createWriteStream('./future.jpg')); 
  // Pipes are an interfact to convert between readable and writable streams.