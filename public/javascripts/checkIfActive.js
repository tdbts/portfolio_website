module.exports = function (activePath) {
	var currentPath = window.location.pathname, 
		pathBase = currentPath === "/" ? currentPath : currentPath.split("/")[1],  
		classString = this.props.classString, 
		className;

	activePath = activePath === "/" ? activePath : activePath.slice(1); 
	
	className = (pathBase === activePath) ? ("active " + classString) : classString;

	return className;	
};