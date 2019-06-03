var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')           
       .on('error', function (err) {                                  
         if(err){
           console.log("Error", err);
         }; 
       })
       .on('response', function (response) {
        console.log('Downloading image...');                      
        console.log('Response Status Code: ', response.statusCode);
        console.log('Response Status Message: ', response.statusMessage);
        console.log('Content type: ', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'))
       .on('finish', function () {
        console.log('Download complete.');
       });