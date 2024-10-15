#! /usr/bin/env node

const yargs = require('yargs')
const wtm = require('./index')

const opt = yargs.usage("\x1b[32mUsage: 'fa <Folder Path>'\x1b[0m").argv

const path = opt._[0]

if (path != undefined) {
  wtm(path)
} else {
  console.log('\x1b[31m%s\x1b[0m', 'System Error: invalid folder path')
}
