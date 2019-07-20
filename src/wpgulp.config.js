/**
 * WPGulp Configuration File
 *
 * 1. Edit the variables as per your project requirements.
 * 2. In paths you can add <<glob or array of globs>>.
 *
 * @package WPGulp
 */

module.exports = {

	// Project options.
	projectURL: 'path-to-project-url',
	productURL: './',
	browserAutoOpen: false,
	injectChanges: true,

	// Style options.
	styleSRC: './sass/style.scss',
	styleDestination: './',
	outputStyle: 'compact', // Available options → 'compact' or 'compressed' or 'nested' or 'expanded'
	errLogToConsole: true,
	precision: 10,

	// Style options.
	styleRTLSRC: './sass/rtl.scss',

	// JS Vendor options.
	jsVendorSRC: './js/vendor/*.js',
	jsVendorDestination: './js/',
	jsVendorFile: 'vendor',

	// JS Custom options.
	jsCustomSRC: './js/custom/*.js',
	jsCustomDestination: './js/',
	jsCustomFile: 'custom',

	// Images options.
	imgSRC: './img/raw/**/*',
	imgDST: './img/',

	// Watch files paths.
	watchStyles: './sass/**/*.scss',
	watchStylesRTL: './sass/**/*.scss',
	watchJsVendor: './js/vendor/*.js',
	watchJsCustom: './js/custom/*.js',
	watchPhp: './**/*.php',

	// Translation options.
	textDomain: 'starter',
	translationFile: 'starter.pot',
	translationDestination: './languages',
	packageName: 'starter',
	bugReport: '',
	lastTranslator: '',
	team: '',

	// Browsers you care about for autoprefixing. Browserlist https://github.com/ai/browserslist
	// The following list is set as per WordPress requirements. Though, Feel free to change.
	BROWSERS_LIST: [
		'last 2 version',
		'> 1%',
		'ie >= 11',
		'last 1 Android versions',
		'last 1 ChromeAndroid versions',
		'last 2 Chrome versions',
		'last 2 Firefox versions',
		'last 2 Safari versions',
		'last 2 iOS versions',
		'last 2 Edge versions',
		'last 2 Opera versions'
	]
};
