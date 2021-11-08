const fs = require('fs')

var data = fs.readFileSync(process.argv[2]);
data = data.toString().split('\n').length-1;
console.log(data)