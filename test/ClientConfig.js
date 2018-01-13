var igeClientConfig = {
	include: [
		/* Your custom game JS scripts */
		/* './gameClasses/ClientNetworkEvents.js', */
		'./gameClasses/CharacterIso.js',
		'./gameClasses/PlayerComponent.js',
        './gameClasses/ClientItem.js',
        './gameClasses/ClientObjects.js',
		/* Standard game scripts */
		'./client.js',
		'./index.js'
	]
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = igeClientConfig; }