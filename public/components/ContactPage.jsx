var React = require('react'), 
	ContactCircle = require('./ContactCircle'), 
	classNames = require('classnames');

var ContactPage = React.createClass({
	getDefaultProps: function () {
		return {
			circleBackContent: [
				{
					idNum: "1", 
					content: (
						<div className="ch-info-back inheritSize">
							<a href="#emailModal" id="openEmailModal" data-toggle="modal" data-target="#myModal"><span className="fa-stack fa-3x needs_tooltip contact_icon" id="stack_1" data-toggle="tooltip" data-placement="left" title="Email">
								<span className="fa fa-circle fa-stack-2x"></span>
								<span className="fa fa-envelope fa-stack-1x fa-inverse"></span>
							</span><br/></a>
							<h3>Email</h3>
							<p>VinnySanchez87@gmail.com</p>
						</div>
					)
				}, 
				{
					idNum: "2",  
					content: (
						<div className="ch-info-back inheritSize">
							<a href="#" id="contactLink-1"><span className="fa-stack fa-3x needs_tooltip contact_icon" id="stack_2" data-toggle="tooltip" data-placement="left" title="GitHub">
								<span className="fa fa-circle fa-stack-2x"></span>
								<span className="fa fa-github fa-stack-1x fa-inverse"></span>
							</span><br/></a>
							<h3>Github</h3>
							<p>tdbts</p>
						</div>
					)
				}, 
				{
					idNum: "3", 
					content: (
						<div className="ch-info-back inheritSize">
							<a href="#" id="contactLink-2"><span className="fa-stack fa-3x needs_tooltip contact_icon" id="stack_3" data-toggle="tooltip" data-placement="left" title="Linked.in">
								<span className="fa fa-circle fa-stack-2x"></span>
								<span className="fa fa-linkedin-square fa-stack-1x fa-inverse"></span>
							</span><br/></a>
							<h3>Linked.in</h3>
							<p>Vincent R. Sanchez</p>
						</div>
					)
				}, 
				{
					idNum: "4", 
					content: (
						<div className="ch-info-back inheritSize">
							<a href="#" id="contactLink-3"><span className="fa-stack fa-3x needs_tooltip contact_icon" id="stack_4" data-toggle="tooltip" data-placement="left" title="Twitter">
								<span className="fa fa-circle fa-stack-2x"></span>
								<span className="fa fa-twitter fa-stack-1x fa-inverse"></span>
							</span><br/></a>
							<h3>Twitter</h3>
							<p>VRSanchez8717</p>
						</div>
					)
				}, 
				{
					idNum: "5", 
					content: (
						<div className="ch-info-back inheritSize">
							<a href="#" id="contactLink-4"><span className="fa-stack fa-3x needs_tooltip contact_icon" id="stack_5" data-toggle="tooltip" data-placement="left" title="Facebook">
								<span className="fa fa-circle fa-stack-2x"></span>
								<span className="fa fa-facebook-square fa-stack-1x fa-inverse"></span>
							</span><br/></a>
							<h3>Facebook</h3>
							<p>VinnyFromTheQ</p>
						</div>
					)
				}			
			]
		};
	}, 

	getInitialState: function () {
		return {
			gridClass: "", 
			wallpaperHeight: {
				height: null, 
				maxHeight: null
			}
		};
	}, 

	createContactCircles: function () {
		var circles = this.props.circleBackContent.map(function (circle) {
			return (
				<li key={circle.idNum} className="circle_container">
					<ContactCircle idNum={circle.idNum} content={circle.content} />
				</li>
			);
		});

		return circles;	
	}, 

	updateWallPaperDimensions: function () {
		this.setState({
			wallpaperHeight: {
				height: (window.innerHeight + window.scrollY).toString() + "px"
			}
		});
	}, 

	componentDidMount: function () {
		this.setState({gridClass: "ch-grid"});

		window.addEventListener('resize', this.updateWallPaperDimensions);
		window.addEventListener('scroll', this.updateWallPaperDimensions);
	}, 

	componentWillUnmount: function () {
		window.removeEventListener('resize', this.updateWallPaperDimensions);
		window.removeEventListener('scroll', this.updateWallPaperDimensions);
	},  

	render: function () {
		return (
			<div id="contact_content_container" className="fullHeightWidth">
				<div id="wallpaper" className="background" style={this.state.wallpaperHeight}>
					<ul id="contact_circle_unordered_list" className={this.state.gridClass}>
						{this.createContactCircles()}
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = ContactPage;
