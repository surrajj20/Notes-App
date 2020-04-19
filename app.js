// const validator = require('validator')
const chalk = require('chalk');
const getNotes = require('./notes')

const msg = getNotes();

console.log(msg)

console.log(chalk.green.inverse.bold('Sucess!'))

// console.log(validator.isURL('http://anugoonj-ipu.com'))
// const name = require('./utils');
// console.log(name);