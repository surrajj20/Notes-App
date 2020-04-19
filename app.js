const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes')

const command = process.argv[2]

console.log(process.argv)

if (command === 'add') {
    console.log('Adding notes!');
} else if (command === 'remove') {
    console.log('Removing notes!')
}