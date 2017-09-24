const React = require('react'),
	PropTypes = require('prop-types');

const ModalButton = (props) => {

	// When Modal Button is clicked:
	// 1. Log object with session_id equal to current timestamp
	// 2. Open modal dialog with specified modalContentElement
	let onClickHandler = () => {
		props.openModalHandler(props.modalContentElement);
		console.log({session_id: new Date().getTime()})
	}

	return (
		<button className="button button--submit" onClick={onClickHandler}>Open Modal</button>
	)
}

ModalButton.propTypes = {
	openModalHandler: PropTypes.func.isRequired,
	modalContentElement: PropTypes.element.isRequired
}

module.exports = ModalButton