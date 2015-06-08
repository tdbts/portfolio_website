var React = require('react');

var TweetCloudImageModal = React.createClass({
	render: function () {
		return (
			<div className="modal fade" id="imageModal" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close modal_close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
							<h4 className="modal-title" id="imageModalLabel"></h4>
						</div>
						<div className="modal-body">
							<div id="image_container">
								<img id="tweet_image" src="#" alt="Picture from Tweet" />
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary modal_close" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>			
		);
	}
});

module.exports = TweetCloudImageModal;
