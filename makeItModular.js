var directoryPath = process.argv[2];
var extension = process.argv[3];
var directory = require('./module');

directory(directoryPath, extension, callback);

function callback(err, files) {
  if (err) return console.error("There was an error:", err);
  console.log(files.join('\n'))
}
