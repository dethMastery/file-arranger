const webp = require('webp-converter')
const fs = require('fs')

const { bulkConvertCB } = require('../callback')

function convertImage(imagePath, outputName) {
  const imgBuffer = fs.readFileSync(imagePath)

  webp.buffer2webpbuffer(imgBuffer, 'jpg', '-q 100').then((result) => {
    // you access the value from the promise here
    fs.writeFileSync(outputName, result)
    bulkConvertCB(
      imagePath.split('/').reverse()[0],
      outputName.split('/').reverse()[0]
    )
  })
}

module.exports = { convertImage }
