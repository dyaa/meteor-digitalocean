Package.describe({
	name: 'dyaa:digitalocean',
	version: '0.1.1',
	// Brief, one-line summary of the package.
	summary: '',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/dyaa/meteor-digitalocean',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Npm.depends({
	"doapi": "0.1.1"
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	api.use('ecmascript');
	api.addFiles('digitalocean.js', [ 'server' ] );
	api.export( 'Digitalocean', [ 'server' ] );
});

Package.onTest(function(api) {
	api.use('ecmascript');
	api.use('tinytest');
	api.use('digitalocean');
	api.addFiles('digitalocean-tests.js');
});
