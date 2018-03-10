# do-not-disturb-cli [![Build Status](https://travis-ci.org/sindresorhus/do-not-disturb-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/do-not-disturb-cli)

> Control the macOS `Do Not Disturb` feature from the command-line


## Install

```
$ npm install --global do-not-disturb-cli
```


## Usage

```
$ do-not-disturb --help

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
```


## Tip

Add a shell alias:

```sh
alias dnd='do-not-disturb toggle'
```


## Related

- [do-not-disturb](https://github.com/sindresorhus/do-not-disturb) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
