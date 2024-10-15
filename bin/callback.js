const { greenSuccess } = require('./color')

function renameCB(filename, err) {
  if (err) throw err

  console.log(`${greenSuccess}${filename} has been moved!`)
}

module.exports = renameCB
