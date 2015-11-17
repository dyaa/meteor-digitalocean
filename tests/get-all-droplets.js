// 3ee61a8311c851f61d1a3ed50914f614cf70261e59cfe01414c4051f6640aa9a
console.log('===Starting test===');
if (Meteor.isServer) {
	var api = new Digitalocean({token: '3ee61a8311c851f61d1a3ed50914f614cf70261e59cfe01414c4051f6640aa9a'});

	api.dropletGetAll().then(function (droplets) {
		Tinytest.add('Get all droplets', function (test) {
			test.equal(droplets.length, 1, "Expected there to be 1 droplet");
		});
	});
}

