// Tiny static server for previewing dist/ — run: node serve.js
const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 8931;
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".mp3": "audio/mpeg",
};
http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split("?")[0]);
  const file = path.join(__dirname, "dist", url === "/" ? "index.html" : url);
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); return res.end("Not found"); }
    const type = MIME[path.extname(file)] || "application/octet-stream";
    // audio players stream/seek with byte ranges, as real static hosts allow
    const m = /bytes=(\d*)-(\d*)/.exec(req.headers.range || "");
    if (m) {
      const start = m[1] ? +m[1] : 0, end = m[2] ? +m[2] : st.size - 1;
      res.writeHead(206, { "Content-Type": type, "Accept-Ranges": "bytes",
        "Content-Range": `bytes ${start}-${end}/${st.size}`, "Content-Length": end - start + 1 });
      return fs.createReadStream(file, { start, end }).pipe(res);
    }
    res.writeHead(200, { "Content-Type": type, "Accept-Ranges": "bytes", "Content-Length": st.size });
    fs.createReadStream(file).pipe(res);
  });
}).listen(PORT, () => console.log(`Preview on http://localhost:${PORT}`));
