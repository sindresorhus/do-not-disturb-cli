#!/usr/bin/env node
'use strict';
const meow = require('meow');
const doNotDisturb = require('@sindresorhus/do-not-disturb');

const cli = meow(`
	Usage
	  $ dnd

	Toggle "Do Not Disturb"
`);

doNotDisturb.toggle();
