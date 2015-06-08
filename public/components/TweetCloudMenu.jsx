var React = require('react'), 
	AccordionPanel = require('./AccordionPanel'), 
	TweetCloudMenuBodyWhatItIs = require('./TweetCloudMenuBodyWhatItIs'), 
	TweetCloudMenuBodyHowItWorks = require('./TweetCloudMenuBodyHowItWorks'), 
	TweetCloudMenuBodySearchOptions = require('./TweetCloudMenuBodySearchOptions');

var TweetCloudMenu = React.createClass({
	getID: function (type, addition) {
		return "panel_" + type + "_" + addition;
	}, 

	getPanelHeadingID: function (addition) {
		return this.getID("heading", addition);
	}, 

	getPanelCollapseID: function (addition) {
		return this.getID("collapse", addition);
	}, 

	componentDidMount: function () {
		
		$(React.findDOMNode(this.refs.openByDefaultPanel))
			.find('#panel_collapse_what_it_is')
			.addClass('do_not_close');
	
	}, 

	render: function () {
		return (
			<div className="panel-group" id={this.props.accordionID} role="tablist" aria-multiselectable="true">
				<AccordionPanel ref="openByDefaultPanel" panelType="default" headingID={this.getPanelHeadingID("what_it_is")} accordionID={this.props.accordionID} collapseID={this.getPanelCollapseID("what_it_is")} expandedByDefault="true" headingText="What It Is" bodyContent={<TweetCloudMenuBodyWhatItIs />} /> 
				<AccordionPanel panelType="default" headingID={this.getPanelHeadingID("how_it_works")} accordionID={this.props.accordionID} collapseID={this.getPanelCollapseID("how_it_works")} headingText="How It Works" bodyContent={<TweetCloudMenuBodyHowItWorks />} />
				<AccordionPanel panelType="default" headingID={this.getPanelHeadingID("search_options")} accordionID={this.props.accordionID} collapseID={this.getPanelCollapseID("search_options")} headingText="Search Options" bodyContent={<TweetCloudMenuBodySearchOptions />} />
			</div>
		);
	}
});

module.exports = TweetCloudMenu;
	