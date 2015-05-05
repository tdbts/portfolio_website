var React = require('react');

var AcknowledgementsNav = React.createClass({

	getNavMenuItems: function (menuOptions) {
		var navListItems = menuOptions.map(function (itemOptionObj, index) {
			return (
				<li key={index} className="list-group-item">
					<a href={"#" + itemOptionObj.href}>{itemOptionObj.text}</a>
				</li>
			);
		});

		return navListItems;
	}, 

	render: function () {
		return (
			<div id="target_nav" className="col-md-3 nav">
				<ul className="nav list-group">
					{this.getNavMenuItems(this.props.menuOptions)}
				</ul>
			</div>
		);
	}
});

module.exports = AcknowledgementsNav;
