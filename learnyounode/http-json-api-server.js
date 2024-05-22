const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const isoTime = parsedUrl.query.iso;

  if (parsedUrl.pathname === '/api/parsetime' && isoTime) {
    const date = new Date(isoTime);
    const jsonResponse = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(jsonResponse));
  } else if (parsedUrl.pathname === '/api/unixtime' && isoTime) {
    const unixTime = new Date(isoTime).getTime();
    const jsonResponse = { unixtime: unixTime };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(jsonResponse));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = process.argv[2];
server.listen(port);
