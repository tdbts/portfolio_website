module.exports = function (activePath) {
	var currentPath = window.location.pathname, 
		activePath = activePath === "/" ? activePath : activePath.slice(1), 
		pathBase = currentPath === "/" ? currentPath : currentPath.split("/")[1],  
		classString = this.props.classString, 
		className = pathBase === activePath ? "active " + classString : classString;

	return className;	
};