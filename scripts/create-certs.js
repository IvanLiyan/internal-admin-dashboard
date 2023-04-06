/* eslint-disable no-console */
const devcert = require("devcert");
const fs = require("fs");

devcert
  .certificateFor("leopard-internal.wish.com", { getCaPath: true })
  .then(({ key, cert, caPath }) => {
    fs.writeFileSync("./certs/devcert.key", key);
    fs.writeFileSync("./certs/devcert.cert", cert);
    fs.writeFileSync("./certs/.capath", caPath);
  })
  .catch(console.error);
