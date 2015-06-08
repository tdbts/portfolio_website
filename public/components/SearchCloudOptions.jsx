var React = require('react');

var SearchCloudOptions = React.createClass({
	render: function () {
		return (
			<div className="options" id="searchCloudOptions">
				<p>Options:</p>
				<button type="button" id="stopCloudAutoRefresh" className="btn btn-primary btn-xs">Stop Cloud Auto Refresh</button>
				<button type="button" className="btn btn-primary btn-xs clearAll">Clear Tags</button>
				<button type="button" id="progress_button" className="btn btn-success btn-xs">Seconds Left</button>
			</div> 
		);
	}
});

module.exports = SearchCloudOptions;
