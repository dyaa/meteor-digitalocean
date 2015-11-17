
# meteor-digitalocean
[![Build Status](https://travis-ci.org/dyaa/meteor-digitalocean.svg)](https://travis-ci.org/dyaa/meteor-digitalocean)
The doapi module allows you to communicate with the [DigitalOcean API V2](https://developers.digitalocean.com/documentation/v2/) from node.js in a promise friendly manner.

It also supports automatic request retries.

## Installation

This module is published in AtmosphereJS:

```
meteor add dyaa:digitalocean
```


## Usage

```js
// Import a module
var api = new Digitalocean({token:'my_token'});

// Get things done
api.dropletGetAll().then(function (droplets) {
	console.log(droplets);
});
```

## Config
```js
new Digitalocean({
	token: 'my_token',
	itemsPerPage: 100, // default=100
	maxRetries: 5, // default=5
	raw: false // default=false
});
```
