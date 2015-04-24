var React = require('react');

var EmailModal = React.createClass({displayName: "EmailModal",
	render: function () {
		return (
			React.createElement("li", null, React.createElement("a", {href: "#emailModal", role: "button", "data-toggle": "modal", id: "mail_icon", className: "link_icon"}, React.createElement("span", {className: "fa fa-envelope fa-2x bar-icon", style: iconStyle, "data-toggle": "tooltip", "data-placement": "bottom", title: "Email"})), 
				React.createElement("div", {id: "emailModal", className: "modal fade", tabIndex: "-1", role: "dialog", "aria-labelledby": "myModalLabel", "aria-hidden": "true"}, 
					React.createElement("div", {className: "modal-dialog"}, 
						React.createElement("div", {className: "modal-content"}, 
							React.createElement("div", {className: "modal-header"}, 
								React.createElement("button", {type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true"}, "×"), 
								React.createElement("h4", {className: "modal-title"}, "Contact Form")
							), 
							React.createElement("div", {className: "modal-body"}, 
								React.createElement("form", {action: "#", name: "commentform", method: "post", id: "emailForm", className: "form-horizontal"}, 
									React.createElement("div", {className: "form-group"}, 
										React.createElement("label", {htmlFor: "first_name", className: "control-label col-md-4"}, "First Name"), 
										React.createElement("div", {className: "col-md-6"}, 
											React.createElement("input", {type: "text", className: "form-control", id: "first_name", name: "first_name", placeholder: "First Name"})
										)
									), 
									React.createElement("div", {className: "form-group"}, 
										React.createElement("label", {htmlFor: "last_name", className: "control-label col-md-4"}, "Last Name"), 
										React.createElement("div", {className: "col-md-6"}, 
											React.createElement("input", {type: "text", className: "form-control", id: "last_name", name: "last_name", placeholder: "Last Name"})
										)
									), 
									React.createElement("div", {className: "form-group"}, 
										React.createElement("label", {htmlFor: "email", className: "control-label col-md-4"}, "Email Address"), 
										React.createElement("div", {className: "col-md-6 input-group"}, 
											React.createElement("span", {className: "input-group-addon"}, "@"), 
											React.createElement("input", {type: "email", className: "form-control", id: "email", name: "email", placeholder: "Email Address"})
										)
									), 
									React.createElement("div", {className: "form-group"}, 
										React.createElement("label", {htmlFor: "comment", className: "control-label col-md-4"}, "Question or Comment"), 
										React.createElement("div", {className: "col-md-6"}, 
											React.createElement("textarea", {name: "comments", id: "comments", rows: "6", className: "form-control", placeholder: "Your question or comment here"})
										)
									), 
									React.createElement("div", {className: "form-group"}, 
										React.createElement("div", {className: "col-md-6"}, 
											React.createElement("button", {className: "btn btn-primary pull-right", type: "button", value: "Submit", id: "send_email_btn"}, "Send")
										)
									)
								)
							)
						)
					)
				)
			)			
		);
	}
});

module.exports = EmailModal;
