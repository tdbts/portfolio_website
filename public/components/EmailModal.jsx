var React = require('react'), 
	invokeAll = require('../javascripts/invokeAll'), 
	$ = window.jQuery || require('jquery');

var EmailModal = React.createClass({
	getVal: function (selector) {
		
		return $(selector).val();
	}, 

	hideModal: function () {

		$('#emailModal').modal('hide');
	}, 

	clearField: function (selectors) {
		
		selectors.forEach(function (fieldID) {
			
			$(fieldID).val("");
		});
	}, 

	activatePopover: function(popoverID) {

		$(popoverID).popover({content: 'Thanks for reaching out!'}, 'click');
	}, 

	hidePopover: function () {
		
		$('#send_email_btn').popover('hide');
	}, 

	activateEmailModal: function () {

		$('#send_email_btn').on('click', function(event) {

			var firstName = this.getVal('#first_name'),
				lastName = this.getVal('#last_name'),
				email = this.getVal('#email'),
				comments = this.getVal('#comments'),
				url = '/sendEmail';

			var request = $.ajax({

				type: "POST",
				url: url,
				data: { 
					firstName: firstName,
					lastName: lastName,
					email: email,
					comments: comments
				} 
			});

			request.done(function() {

				invokeAll([
					this.hideModal, 
					function () {
						this.clearField(['#first_name', '#last_name', '#email', '#comments']);
					}, 
					this.hidePopover
				]);
			}.bind(this));

			request.fail(function() {
				
				alert('Sorry, AJAX was unable to process that request!');
			});

			event.preventDefault();
		}.bind(this));		
	}, 

	componentDidMount: function () {
		
		invokeAll([this.activatePopover, this.activateEmailModal])
	}, 

	render: function () {
		var emailInputStyle = {
				paddingLeft: "15px", 
				paddingRight: "15px"
			};

		return (
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
									<div className="col-md-6 input-group" style={emailInputStyle}>
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
		);
	}
});

module.exports = EmailModal;
