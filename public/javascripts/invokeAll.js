module.exports = function (arrayOfFunctions) {
	
	arrayOfFunctions.forEach(function (func) {
		
		func();
	});
	
};