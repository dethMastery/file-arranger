#! /usr/bin/env node

const yargs = require('yargs')
const { mainArrange, bulkRename, bulkConvert } = require('./index')

const opt = yargs.usage("\x1b[32mUsage: 'fa <Folder Path>'\x1b[0m").options({
  name: {
    alias: 'n',
    describe: 'Bulk File Rename',
    type: 'string',
    demandOption: false,
  },
  convert: {
    alias: 'c',
    describe: 'Convert files in folder to .webp in least interaction',
    type: 'string',
    demandOption: false,
  },
}).argv

const path = opt._[0]
const name = opt.name
const convert = opt.convert

if (path != undefined) {
  if (name != undefined && convert == undefined) {
    bulkRename(path, name)
    // console.log('rename')
  } else if (name == undefined && convert != undefined) {
    bulkConvert(path, convert)
  } else {
    mainArrange(path)
  }
} else {
  console.log('\x1b[31m%s\x1b[0m', 'System Error: invalid folder path')
}
