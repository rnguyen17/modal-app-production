const React = require('react'),
	AppUtils = require('components/utils'),
	Config = require('components/config');

const ResetButton = (props) => {

	// On click, reset variation saved in localStorage and refresh page
	let onClickHandler = () => {
		AppUtils.clearModalVariation(Config.modalVariationConfig.label);
	}

	return (
		<button className="button button--reset" onClick={onClickHandler}>Reset</button>
	)
}

module.exports = ResetButton