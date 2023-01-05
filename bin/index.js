#!/usr/bin/env node
var oApp = {};

oApp.fs = require('fs');
oApp.commander = require('commander');
oApp.useful = require('../lib/useful.js');
oApp.commands = require('../controller/commands.js');

let sPath = oApp.useful.getPath();
sPath = `${sPath}/jsonphp-cli/package.json`;
oApp.packageJson = JSON.parse(oApp.fs.readFileSync(sPath, 'utf-8'));

try{
	oApp.commander.version(oApp.packageJson.version)
	.description(oApp.packageJson.description);


	oApp.commander
	.action(() => {
		throw(1);
	});

	// Install package jsonphp in the current folder.
	oApp.commander.command('install')
	.alias('i')
	.description('Install package jsonphp in the current folder.')
	.action(() => {
		oApp.commands.install();
	});

	// Update all jsonphp packages in the current folder.
	/*oApp.commander.command('update')
	.alias('u')
	.description('Update all jsonphp packages in the current folder.')
	.action(() => {
		oApp.commands.update();
	});*/

	oApp.commander.parse(process.argv);
}catch(e){
	switch(e){
		case 1:
			console.log(` Error: The instruction is not recognized. Run "jsonphp-cli -h" to get help.`);
        	break;
        default:
        	console.log(` Unexpected error.`)
        	console.log(e)
        	break;
    }
}
