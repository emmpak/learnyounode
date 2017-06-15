const fs = require('fs');

const contents = fs.readFile(process.argv[2], 'utf8', countLines);

function countLines(err, file) {
  if (err) return console.log(err);
  console.log(file.split('\n').length - 1);
}
