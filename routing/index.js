const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    const query = url.parse(req.url, true);
    const filename = `./pages${query.pathname}.html`;

    fs.readFile(filename, (err, data) => {
      if (err) {
        console.error(err);
        fs.readFile("./pages/notFound.html", (err, data) => {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(data);
        });

        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
