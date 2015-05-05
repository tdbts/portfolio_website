module.exports = function (watcher) {
	
	watcher.on('change', function (event) {
		console.log("File: " + event.path + " " + event.type);
	});
};