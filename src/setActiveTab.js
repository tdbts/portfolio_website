module.exports = function (requestObject) {
	
	var secondSlashIndex = requestObject.path.indexOf('/', 1);

	requestObject.viewOptions.activeTab = requestObject.path.slice(0, secondSlashIndex); 

	return;
};