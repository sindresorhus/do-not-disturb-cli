#!/usr/bin/env node
'use strict';
const meow = require('meow');
const doNotDisturb = require('@sindresorhus/do-not-disturb');

meow(`
	Usage
	  $ dnd

	Toggle "Do Not Disturb"
`);

doNotDisturb.toggle();
