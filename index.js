//const fs = require('fs');

//const textIn = fs.readFileSync('./input1.txt', 'utf-8');

//console.log(textIn);

//fs.readFile('./input1.txt', 'utf-8', (err, data) => {
//  console.log(data);
//});

//console.log('will read the File');

const http = require('http');
const fs = require('fs');

const url = require('url');
const Data = fs.readFileSync(`${__dirname}/datajson/data.json}`, 'utf-8');

const dataObj = JSON.parse(Data);
const server = http.createServer((req, res) => {
  const PathName = req.url;
  if (PathName === '/product') {
    res.end('This is a product page');
  } else if (PathName === '/overview') {
    res.end('This is a overview page');
  } else if (PathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead('404');
    res.end('Error 500');
  }
});

server.listen(5000, '127.0.0.1', () => {
  console.log('Listening to the port 8080');
});
