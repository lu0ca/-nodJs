const mymodule = require('./mymodule.js')

const file_path = process.argv[2]

const Extention = process.argv[3]

mymodule( file_path , Extention ,  (err, data) => {

  if (err) {
    return console.error(err)
  }

  data.forEach(  (file) => {
    console.log(file)
  })

})