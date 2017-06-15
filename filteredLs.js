const fs = require('fs');
const path = require('path');
const directory = process.argv[2];
const extension = `.${process.argv[3]}`;

fs.readdir(directory, filterLs);

function filterLs(err, files) {
  if (err) return console.log(err);
  let filtered_files = files.filter(file => file.includes(extension));
  // OR let filtered_files = files.filter(file => path.extname(file) === extension);
  console.log(filtered_files.join('\n'));
}
