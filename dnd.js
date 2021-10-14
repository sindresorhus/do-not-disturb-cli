#!/usr/bin/env node
import meow from 'meow';
import doNotDisturb from '@sindresorhus/do-not-disturb';

meow(`
	Usage
	  $ dnd

	Toggle "Do Not Disturb"
`, {
	importMeta: import.meta,
});

doNotDisturb.toggle();
