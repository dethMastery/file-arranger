const ffmpeg = require('fluent-ffmpeg')
const { bulkConvertCB } = require('../callback')

function convertImage(imagePath, outputName) {
  ffmpeg().input(imagePath).saveToFile(outputName)

  bulkConvertCB(
    imagePath.split('/').reverse()[0],
    imagePath.split('/').reverse()[0]
  )
}

module.exports = { convertImage }
