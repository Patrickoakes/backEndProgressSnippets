// As always, we grab the fs package to handle read/write.
var fs = require("fs");

// Next, we store the text given to us from the command line.
const [node,file,...args] = process.argv;

console.log(node);
console.log(file);
console.log(node);
const text = args.join(' ');
// Next, we append the text into the "sample.txt" file.
// If the file didn't exist, then it gets created on the fly.
//var text = process.argv;
fs.appendFile("sample.txt", text + '/n', function(err) {

  // If an error was experienced we will log it.
  if (err) {
    console.log(err);
  }

  // If no error is experienced, we'll log the phrase "Content Added" to our node console.
  else {
    console.log("Content Added!");
  }

});
