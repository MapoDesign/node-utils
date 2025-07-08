const http = require("http");
const https = require("https");
const path = require("path");
// const options = {
//   hostname: "info.cern.cch",
//   method: "GET",
//   path: "/hypertext/WWW/TheProject.html",
// };

// const req = http
//   .request(options, (res) => {
//     if (res.statusCode < 300 && res.statusCode >= 200) {
//       console.log(`Request successful: ${res.statusCode}`);
//       res.on("data", (chunk) => {
//         process.stdout.write(chunk);
//       });
//     } else {
//       console.log(`Request failed: ${res.statusCode}`);
//     }
//   })
//   .on("error", (err) => {
//     console.error(
//       `Error serve non raggiungibile: ${err.message} - ${err.code}`
//     );
//   })
//   .end();

const options = {
  hostname: "it.wikipedia.org",
  method: "GET",
  path: "/wiki/Node.js",
};

const req = https
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
    console.error(
      `Error serve non raggiungibile: ${err.message} - ${err.code}`
    );
  })
  .end();
