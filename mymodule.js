const fs = require('fs');
const path = require('path');

module.exports =  ( file_path, Extention, callback) => {

  fs.readdir( file_path ,  (err, data) => {

    if (err) {
      return callback(err)
    }

    data = data.filter( (file) => {
      return path.extname(file) === '.' + Extention
    })

    callback(null, data)

  })

}