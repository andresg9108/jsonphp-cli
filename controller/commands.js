var oApp = {};

require('shelljs/global');
oApp.fs = require('fs');
oApp.useful = require('../lib/useful.js');


oApp.install = () => {
	console.log('\nInstalling jsonphp.\n');
	exec('install-here jsonphp');
	console.log('\nInstalling dependencies.\n');
	exec('npm i');
	exec('composer install');
}

oApp.update = () => {
	console.log('\nUpdate jsonphp.\n');
	exec('install-here jsonphp');
	console.log('\nUpdate dependencies.\n');
	exec('npm update');
	exec('composer update');
}


exports.install = oApp.install;
// exports.update = oApp.update;