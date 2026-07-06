const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  const serverName = process.env.SERVER_NAME || "Mặc định";
  res.end(`<h1>Welcome to Web Server: ${serverName}</h1>`);
});

server.listen(port, () => {
  console.log(`Server đang chạy tại cổng ${port}`);
});
