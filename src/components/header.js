const React = require('react'),
	PropTypes = require('prop-types'),
	ResetButton = require('components/resetButton');

const Header = (props) => {
	return (
		<header className="header">
			<nav className="nav">
				<a className="logo" href="#">{props.logo}</a>
				<ResetButton />
			</nav>
		</header>
	)
}

Header.propTypes = {
	logo: PropTypes.string.isRequired
}

module.exports = Header;