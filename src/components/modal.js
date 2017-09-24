const React = require('react'),
	PropTypes = require('prop-types');

const Modal = (props) => {
	let { isModalOpen, closeModalHandler, modalContentElement } = props;

	// Only render modal if isModalOpen flag is true
	if (isModalOpen) {
		return (
			<div className="modal-container active">
				<div className="modal-overlay" onClick={closeModalHandler}></div>
				<div className="modal">
					<div className="button--close" onClick={closeModalHandler}>X</div>
					{modalContentElement}
				</div>
			</div>
		)
	}

	return null;
}

Modal.propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	closeModalHandler: PropTypes.func.isRequired,
	modalContentElement: PropTypes.element.isRequired
}

module.exports = Modal;