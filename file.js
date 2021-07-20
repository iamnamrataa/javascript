
//Node.js file that reads the html file and return the content
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res){
    fs.readFile("file.html", function (err, data){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);

// create  a new file using appendFile() method 
var fs = require('fs');
fs.appendFile('mynewfile1.txt','hello world',function(err)   //creating  file mynewfile1.txt
{
    if(err) throw err;
    console.log('saved');
});

// create  a new file using openFile() method 
var fs = require('fs');
fs.open('mynewfile2.txt','w',function(err,file)      //creating  file mynewfile2.txt
{
    if(err) throw err;
    console.log('saved');
});

//update file
var fs = require('fs');
fs.appendFile('mynewfile1.txt','this is my text', function(err)      //updating file mynewfile1.txt
{
    if(err) throw err;
    console.log('updated');
});

//delete file
var fs = require('fs');
fs.unlink('mynewfile2.txt', function(err)        //deleting file mynewfile2.txt
{
    if(err) throw err;
    console.log('file deleted');
});

//rename file
var fs = require('fs');
fs.rename('mynewfile.txt','myrenamedfile.txt',function(err)
{
    if(err) throw err;
    console.log('file renamed');
});

//rename file