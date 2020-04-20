const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes')

//Customize yargs version 
yargs.version('1.1.0')

//Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'String'
        }

    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
});

//Create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove the notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create List command
yargs.command({
    command: 'list',
    describe: 'list yours notes',
    handler() {
        notes.listNotes()
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Reading a notes')
    }
})

yargs.parse()
// console.log(yargs.argv)
