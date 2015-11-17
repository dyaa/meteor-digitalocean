Meteor.npmPackage = function( npmPackage ) {
	var package = Npm.require( npmPackage );
	return package;
};

Digitalocean = Npm.require( 'doapi' );