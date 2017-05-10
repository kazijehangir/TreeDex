const fs = require('fs')
const qr = require('qr-image')
fs.readFile('TreeData.json', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log("data: " + data)
    obj = JSON.parse(data)
    for (var key in obj) {
      var code = qr.image(JSON.stringify(obj[key]), { type: 'png' });
      var output = fs.createWriteStream(key + '.png')
      code.pipe(output); 
    }
  }
})
