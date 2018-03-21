#!/usr/bin/env node
'use strict';
const updateNotifier = require('update-notifier');
const meow = require('meow');
const mv = require('mv');

const cli = meow(`
	Usage
	  $ mv-cli source dest
	  
	Options
	  -md, --mkdirp    first create all necessary directories
	  -nc, --noclobber don't overwrite existing files
	  -l, --limit      how many concurrent file requests can be made, default 16
	  
	Example
	  $ mv-cli source/file dest/file
`, {
    flags: {
        mkdirp: {
            type: 'boolean',
            alias: 'md',
            default: false
        },
        noclobber: {
            type: 'boolean',
            alias: 'nc',
            default: false
        },
        limit: {
            type: 'string',
            alias: 'l',
            default: '16'
        }
    }
});

updateNotifier({pkg: cli.pkg}).notify();

if (cli.input.length < 2) {
    console.error('Specify source and destination path');
    process.exit(1);
}

const limit = parseInt(cli.flags.limit);
if (isNaN(cli.flags.limit)) {
    console.error('The limit (-l) is not a valid number');
    process.exit(1);
}

mv(cli.input[0], cli.input[1], {mkdirp: cli.flags.mkdirp, clobber: !cli.flags.noclobber, limit: limit}).then(err => {
    throw err;
});