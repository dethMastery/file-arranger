const fs = require('fs')
const path = require('path')

const renameCB = require('./callback')

function mainArrange(filePath) {
  const list = fs.readdirSync(filePath)

  if (list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].includes('.')) {
        if (list[i] != '.DS_Store') {
          let finalDir = path.join(filePath, list[i].split('.').reverse()[0])
          let finalFile = path.join(
            path.join(filePath, list[i].split('.').reverse()[0]),
            list[i]
          )

          if (!fs.existsSync(finalDir)) {
            fs.mkdirSync(finalDir)
            fs.rename(path.join(filePath, list[i]), finalFile, (err) => {
              renameCB(list[i], err)
            })
          } else {
            fs.rename(path.join(filePath, list[i]), finalFile, (err) => {
              renameCB(list[i], err)
            })
          }
        }
      } else {
      }
    }
  }
}

module.exports = mainArrange
