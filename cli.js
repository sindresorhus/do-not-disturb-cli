#!/usr/bin/env node
'use strict';
const meow = require('meow');
const doNotDisturb = require('@sindresorhus/do-not-disturb');

const cli = meow(`
	Usage
	  $ do-not-disturb <command>

	Commands
	  on
	  off
	  toggle
	  status

	Examples
	  $ do-not-disturb on
	  $ do-not-disturb status
	  on

	Use \`$ dnd\` to quickly toggle
`);

const [command] = cli.input;

(async () => {
	switch (command) {
		case 'on':
			await doNotDisturb.enable();
			break;
		case 'off':
			await doNotDisturb.disable();
			break;
		case 'toggle':
			await doNotDisturb.toggle();
			break;
		case 'status':
			console.log(await doNotDisturb.isEnabled() ? 'on' : 'off');
			break;
		default:
			cli.showHelp();
	}
})();

