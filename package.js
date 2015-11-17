Package.describe({
	name: 'dyaa:digitalocean',
	version: '0.1.1_1',
	// Brief, one-line summary of the package.
	summary: 'DigitalOcean API V2 wrapper',
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
	api.addFiles('digitalocean.js', [ 'server' ] );
	api.export( 'Digitalocean', [ 'server' ] );
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('dyaa:digitalocean', 'server');
	api.addFiles('tests/get-all-droplets.js', 'server');
});
