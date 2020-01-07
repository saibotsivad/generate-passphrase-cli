# generate-passphrase-cli

Generate a passphrase from the CLI using random words, like `battery-horse-staple`.

## install

The usual way:

```bash
npm install generate-passphrase-cli
```

## options

* `--help` Print version number and all available options.
* `--min` Minimum number of characters in a word. Default is 3.
* `--max` Maximum number of characters in a word. Default is 8.
* `--words` Number of words in passphrase. Default is 5.
* `--sep` Separator used between words. Default is `-`.

## examples

Use default settings:

```bash
$ generate-passphrase
geminy-laughier-vest-muse-mantra-petard
```

Use lots of small words:

```bash
$ generate-passphrase --min=1 --max=3 --words=10
zho-bod-arm-tis-oft-fun-yom-too-ays-es
```

Specify a custom separator:

```bash
$ generate-passphrase --sep="_" --words=2
tuppence_colbys
```

Specify no separator:

```bash
$ generate-passphrase --sep="" --words=2
tuppencecolbys
```

Use random numbers as separator (randomly selects an integer between 10 and 99):

```bash
$ generate-passphrase --sepnums --words=2
tuppence23colbys
```

## license

Published and released under the [Very Open License](http://veryopenlicense.com).
