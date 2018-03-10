import test from 'ava';
import execa from 'execa';

test('main', async t => {
	t.regex(await execa.stdout('./cli.js', ['status']), /on|off/);
});
