var React = require('react');

var TweetCloudSearchInput = React.createClass({
	render: function () {
		return (
			<div id={this.props.inputID + "_container"} className="tweet_cloud_input_container">
				<h4 className="cloudTitle">{this.props.inputHeader}</h4>
				<p>{this.props.inputPrompt}</p>
				<div className="input-group">
					<input type="text" name={this.props.inputID} className="inputField" id={this.props.inputID} />
					<button type="button" id={this.props.inputID + "_button"} className="btn btn-primary btn-xs">{this.props.buttonText}</button>
				</div>
			</div>			
		);
	}
});

module.exports = TweetCloudSearchInput;
