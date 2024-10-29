#! /usr/bin/env node

const yargs = require('yargs')
const { mainArrange, bulkRename } = require('./index')

const opt = yargs
  .usage("\x1b[32mUsage: 'fa <Folder Path>'\x1b[0m")
  .options('name', {
    alias: 'n',
    describe: 'Bulk File Rename',
    type: 'string',
    demandOption: false,
  }).argv

const path = opt._[0]
const name = opt.name

if (path != undefined) {
  if (name != undefined) {
    bulkRename(path, name)
  } else {
    mainArrange(path)
  }
} else {
  console.log('\x1b[31m%s\x1b[0m', 'System Error: invalid folder path')
}
