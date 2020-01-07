#!/usr/bin/env node

const { version } = require('./package.json')
const randomWord = require('random-word')
const sade = require('sade')

const DEFAULT_MIN = 3
const DEFAULT_MAX = 8
const DEFAULT_WORDS = 6
const DEFAULT_SEPARATOR = '-'

sade('generate-passphrase', true)
	.version(version)
	.describe('Generate a passphrase using a list of random words.')
	.example('# default options')
	.example('--min=1 --max=3 # small words')
	.example('--sep="" # no separator')
	.option('--min', 'Minimum number of characters for a word. Default is 3.')
	.option('--max', 'Maximum number of characters for a word. Default is 8.')
	.option('--words', 'Number of words in passphrase. Default is 5.')
	.option('--sep', 'Separator used between words. Default is "-".')
	.option('--sepnums', 'Use a random number between words. Overrides separator option.')
	.action(opts => {
		opts.min = opts.min === undefined ? DEFAULT_MIN : parseInt(opts.min, 10)
		opts.max = opts.max === undefined ? DEFAULT_MAX : parseInt(opts.max, 10)
		opts.words = opts.words === undefined ? DEFAULT_WORDS : parseInt(opts.words, 10)

		const getSeparator = isStart => {
			if (isStart) {
				return ''
			} else if (opts.sepnums) {
				return Math.floor(Math.random() * 99) + 10
			} else if (opts.sep) {
				return opts.sep
			}
			return DEFAULT_SEPARATOR
		}

		const words = new Array(opts.words)
			.fill()
			.map(() => {
				let currentWord = randomWord()
				while (currentWord.length < opts.min || currentWord.length > opts.max) {
					currentWord = randomWord()
				}
				return currentWord
			})
			.reduce((string, word) => string + getSeparator(!string) + word, '')

		process.stdout.write(words)
	})
	.parse(process.argv)
