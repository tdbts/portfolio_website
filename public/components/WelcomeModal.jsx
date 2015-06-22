var React = require('react');

var WelcomeModal = React.createClass({
	componentDidMount: function () {
		
		$('#welcome_modal').on('hidden.bs.modal', function (e) {
			console.log("HANDLING HIDDEN WELCOME MODAL.");
			this.props.handleHiddenWelcomeModal();
		
		}.bind(this));
	}, 

	componentWillUnmount: function (e) {

		$('#welcome_modal').off('hidden.bs.modal');
	}, 

	render: function () {
		return (
			<div id="welcome_modal" className="modal welcome_modal_animation" tabIndex="-1" role="dialog" aria-labelledby="email_modal" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button id="welcome_modal_close_button" type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
							<h4 className="modal-title">Hey there!  Thanks for visiting my page!</h4>
						</div>
						<div className="modal-body">
							<div id="modal_body_content_wrapper">
								<img id="vinny_welcome_img" className="img-thumbnail" src="images/vinnyph.png" />
								<p><strong>My name is Vinny Sanchez and I am a web developer based out of New York City.</strong></p>
								<p>I began programming casually about two years ago because I tried it out and it seemed like a lot of fun.  
								Over time, it has become more than fun for me &#8212; but a way of life.  Anyone who writes code for a living 
								knows the feeling.  You have a certain drive &#8212; an almost obsessive compulsion to create something new 
								all the time.  You&#39;re solving problems on a daily basis, and there&#39;s always new obstacles to face, and 
								novel concepts to learn.  Conceptually, you&#39;re dealing with both abstract, higher&#45;level thinking about 
								program architecture, as well as handling lower&#45;level implementation details.  <strong>It&#39;s challenging, and 
								it&#39;s a lot of work, and I absolutely love every moment of it.</strong></p>
								<p>Anyway, you can view some of my work at this page.  If you like it, don&#39;t forget to check out my resume 
								or my GitHub, Twitter or Stack Overflow accounts.  And definitely me know what you think!</p>
								<p>Again, thanks for stopping by!</p>
								<p><em>&#45; Vinny</em></p>
							</div>
						</div>
					</div>
				</div>
			</div>				
		);
	}
});

module.exports = WelcomeModal;
