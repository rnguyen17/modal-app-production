const React = require('react'),
	PropTypes = require('prop-types');

const Content = (props) => {
	return (
		<section className="section--content">
			<h1>{props.header}</h1>
			{props.children}
		</section>
	)
}

Content.propTypes = {
	header: PropTypes.string.isRequired
}

module.exports = Content