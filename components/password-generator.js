var generator = require("generate-password");

var password = generator.generate({
  length: 10,
  numbers: true,
  uppercase: true,
  lowercase: true,
  symbols: true,
});

console.log(password);
