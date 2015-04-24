var React = require('react');

var NavbarRight = React.createClass({
	render: function () {
		var iconStyle = {fontSize: "1.6em"};

		return (
			<ul className="nav navbar-nav navbar-right">
				<li><a href="#emailModal" role="button" data-toggle="modal" id="mail_icon" className="link_icon"><span className="fa fa-envelope fa-2x bar-icon" style={iconStyle} data-toggle="tooltip" data-placement="bottom" title="Email"></span></a>
					<div id="emailModal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
									<h4 className="modal-title">Contact Form</h4>
								</div>
								<div className="modal-body">
									<form action="#" name="commentform" method="post" id="emailForm" className="form-horizontal">
										<div className="form-group">
											<label htmlFor="first_name" className="control-label col-md-4">First Name</label>
											<div className="col-md-6">
												<input type="text" className="form-control" id="first_name" name="first_name" placeholder="First Name"/>
											</div>
										</div>
										<div className="form-group">
											<label htmlFor="last_name" className="control-label col-md-4">Last Name</label>
											<div className="col-md-6">
												<input type="text" className="form-control" id="last_name" name="last_name" placeholder="Last Name"/>
											</div>
										</div>
										<div className="form-group">
											<label htmlFor="email" className="control-label col-md-4">Email Address</label>
											<div className="col-md-6 input-group">
												<span className="input-group-addon">@</span>
												<input type="email" className="form-control" id="email" name="email" placeholder="Email Address"/>
											</div>
										</div>
										<div className="form-group">
											<label htmlFor="comment" className="control-label col-md-4">Question or Comment</label>
											<div className="col-md-6">
												<textarea name="comments" id="comments" rows="6" className="form-control" placeholder="Your question or comment here"></textarea>
											</div>
										</div>
										<div className="form-group">
											<div className="col-md-6">
												<button className="btn btn-primary pull-right" type="button" value="Submit" id="send_email_btn">Send</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li><a href="#" id="twitter_icon" className="link_icon"><span className="fa fa-twitter fa-2x bar-icon" style={iconStyle} data-toggle="tooltip" data-placement="bottom" title="Twitter"></span></a></li>
				<li><a href="#" id="github_icon" className="link_icon"><span className="fa fa-github fa-2x bar-icon" style={iconStyle} data-toggle="tooltip" data-placement="bottom" title="Github"></span></a></li>
			</ul>			
		);
	}
});

module.exports = NavbarRight;
