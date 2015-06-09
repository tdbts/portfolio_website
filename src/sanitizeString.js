module.exports = function (str){
	
	str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
	
	return str.trim();
};
