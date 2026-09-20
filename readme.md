# do-not-disturb-cli

> Control the macOS `Do Not Disturb` feature from the command-line

> [!WARNING]
> This package is archived. It does not work on macOS 11 or later.
>
> macOS 11 replaced Do Not Disturb with Focus, and Apple ships no public API to set it. Use a shortcut with the built-in "Set Focus" action instead: `shortcuts run "<shortcut name>"`.

## Install

```sh
npm install --global do-not-disturb-cli
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

  Use `$ dnd` to quickly toggle
```

## Related

- [do-not-disturb](https://github.com/sindresorhus/do-not-disturb) - API for this package
