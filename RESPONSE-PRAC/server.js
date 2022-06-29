const http = require("http");
const fs = require("fs");




const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    const index = fs.readFileSync("index.html");
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    return res.end(index);
  }

  if (path.length > 1 && req.url.startsWith("/static")) {
    const path = req.url.split("/static")[1];

    try {
      const resBody = fs.readFileSync(".assets" + path);
      res.statusCode = 200;
      res.setHeader("Content-Type", getcontentType(path));
      res.end(resBody);
      return;
    } catch {
      console.error("Cannot find asset", path, "in assets folder");
      res.statusCode = 404;
      return res.end();
    }
  }

  // Return a 404 response when there is no matching route handler
  res.statusCode = 404;
  res.setHeader("content-type", "text/plain");
  return res.end("No matching route handler found for this endpoint");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log("Server is listening on port", PORT));
