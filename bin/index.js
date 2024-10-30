const fs = require('fs')
const path = require('path')

const { renameCB, bulkRenameCB } = require('./callback')
const { redBan, logReset, greenSuccess } = require('./color')
const { convertImage } = require('./Modules/convert')

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
        console.log(`${redBan}Error: There's no files here.${logReset}`)
      }
    }
  }
}

function bulkRename(folderPath, name) {
  const list = fs.readdirSync(folderPath)

  if (list.length > 0) {
    let count = 1
    for (let i = 0; i < list.length; i++) {
      if (list[i] != '.DS_Store') {
        let slug = ''

        if (String(count).length == 1) {
          slug = `00${count}`
        } else if (String(count).length == 2) {
          slug = `0${count}`
        } else {
          slug = `${count}`
        }

        let ext = list[i].split('.').pop()
        let fileName = `${name}-${slug}.${ext}`

        fs.rename(
          path.join(folderPath, list[i]),
          path.join(folderPath, fileName),
          (err) => {
            bulkRenameCB(list[i], fileName, err)
          }
        )

        count++
      }
    }
  } else {
    console.log(`${redBan}Error: There's no files here.${logReset}`)
  }
}

function bulkConvert(folderPath, outFolder) {
  const outDir =
    outFolder != ''
      ? `${path.join(folderPath, outFolder)}`
      : `${path.join(folderPath, '/webp')}`

  const list = fs.readdirSync(folderPath)

  for (let i = 0; i < list.length; i++) {
    if (list[i] != '.DS_Store') {
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir)
      }

      convertImage(
        path.join(folderPath, list[i]),
        path.join(outDir, `${list[i].split('.')[0]}.webp`)
      )
    }
  }
}

module.exports = { mainArrange, bulkRename, bulkConvert }
