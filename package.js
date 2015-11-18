Package.describe({
	name: 'dyaa:digitalocean',
	version: '0.1.1_3',
	summary: 'DigitalOcean API V2 wrapper',
	git: 'https://github.com/dyaa/meteor-digitalocean',
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