import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['status']);
	t.regex(stdout, /on|off/);
});
