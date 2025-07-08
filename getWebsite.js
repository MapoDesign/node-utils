const http = require("http");
const options = {
  hostname: "info.cern.ch",
  method: "GET",
};

const req = http
  .request(options, (res) => {
    if (res.statusCode < 300 && res.statusCode >= 200) {
      console.log(`Request successful: ${res.statusCode}`);
      res.on("data", (chunk) => {
        process.stdout.write(chunk);
      });
    } else {
      console.log(`Request failed: ${res.statusCode}`);
    }
  })
  .on("error", (err) => {
    console.error(`Error: ${err.message} - ${err.code}`);
  })
  .end();
