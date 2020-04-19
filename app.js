const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes')

//Customize yargs version 
yargs.version('1.1.0')

//Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new notes')
    }
});

//Create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove the notes',
    handler: function () {
        console.log('Removing notes')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a notes')
    }
})

//Create List command
yargs.command({
    command: 'list',
    describe: 'list yours notes',
    handler: function () {
        console.log('Listing all notes')
    }
})


// add, remove, read, list

console.log(yargs.argv)
