const { greenSuccess, logReset } = require('./color')

function renameCB(filename, err) {
  if (err) throw err

  console.log(`${greenSuccess}${filename} has been moved!${logReset}`)
}

function bulkRenameCB(oldName, newName, err) {
  if (err) throw err

  console.log(
    `${greenSuccess}${oldName} has been renamed to ${newName} successfully!${logReset}`
  )
}

function bulkConvertCB(oldName, newName) {
  console.log(
    `${greenSuccess}${oldName} has been converted to ${newName} successfully!${logReset}`
  )
}

module.exports = { renameCB, bulkRenameCB, bulkConvertCB }
