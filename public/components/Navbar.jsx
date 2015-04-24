var React = require('react');

var Navbar = React.createClass({
	render: function () {
		var collapseDivStyle = {height: "1px"}, 
			navStyle = {height: "52px"};

		return (
			<nav className="navbar navbar-inverse" style={navStyle}>
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a href="#" className="navbar-brand">{this.props.brand}</a>
					</div>
					<div style={collapseDivStyle} className="navbar-collapse collapse" id="myNavbar">
						{this.props.content}
					</div>
				</div>
			</nav>										
		);
	}
});

module.exports = Navbar;
