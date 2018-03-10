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
`);

const [command] = cli.input;

switch (command) {
	case 'on':
		doNotDisturb.enable();
		break;
	case 'off':
		doNotDisturb.disable();
		break;
	case 'toggle':
		doNotDisturb.toggle();
		break;
	case 'status':
		console.log(doNotDisturb.isEnabled() ? 'on' : 'off');
		break;
	default:
		cli.showHelp();
}

