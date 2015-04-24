var React = require('react');

var NavListItemDropdown = React.createClass({
	render: function () {

		var linkClassName = "dropdown-toggle " + this.props.classString;

		var menuLinks = this.props.links.map(function (obj) {
			return obj.active === true ? <li key={obj.text}><a href={obj.href}>{obj.text}</a></li> 
				: <li key={obj.text}><a href="#"><em>{obj.text}</em></a></li>;
		});
		
		return (
			<li className="dropdown"><a href="#" className={linkClassName} data-toggle="dropdown">{this.props.linkText} <span className="caret"></span></a>
				<ul className="dropdown-menu">
					{menuLinks}
				</ul>
			</li>			
		);
	}
});

module.exports = NavListItemDropdown;
