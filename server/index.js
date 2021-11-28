const express = require("express");
const next = require("next");

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.all("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on localhost:${port}`);
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
