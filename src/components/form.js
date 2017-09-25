const React = require('react'),
	PropTypes = require('prop-types');

const FormInput = (props) => {
	let validationLabel,
		isInvalidInput = props.required && !props.value,
		isShowError = props.isShowError;

	// Only render error label if input is invalid && parent component passes down isShowError flag = true
	if (isInvalidInput && isShowError) {
		validationLabel = <label className="label--error">*This is a required field</label>
	}

	return (
		<div className={isShowError ? 'show-error form-input' : 'form-input'}>
			<input className={isInvalidInput ? 'invalid input' : 'valid input'}
				autoComplete="off" 
				required={props.required}
				name={props.name}
				type={props.type}
				placeholder={props.placeholder}
				value={props.value}/>
			{validationLabel}
		</div>
	)
}

FormInput.propTypes = {
	required: PropTypes.bool,
	isShowError: PropTypes.bool,
	value: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired
}

const SelectInput = (props) => {

	//Log State dropdown input value on change
	let onChangeHandler = (event) => {
		console.log(`State select dropdown value changed to: ${event.target.value}`);
	}

	return (
		<div className="select-wrapper">
			<select className="select" onChange={onChangeHandler} name="state" value={props.value}>
				<option value="" disabled>Select a state</option>
				<option value="texas">Texas</option>
				<option value="california">California</option>
				<option value="new-york">New York</option>
				<option value="florida">Florida</option>
			</select>
		</div>
	)
}

SelectInput.propTypes = {
	value: PropTypes.string.isRequired
}

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			formInputs: {
				name: '',
				email: '',
				phone: '',
				address: '',
				state: '',
				city: '',
				zip: ''},
			isShowError: false,
			isValid: false
		}

		// On form change, update state to reflect new form data
		// Assign onChange event to form and look for correct event.target
		this.onFormChangeHandler = (event) => {
			let inputValue = event.target.value,
				inputName = event.target.getAttribute('name'),
				newFormInputState = Object.assign({}, this.state.formInputs, {[inputName]: inputValue})

			this.setState({
				formInputs: newFormInputState
			})
		}

		// Form validation logic will go in here
		this.validateForm = (state) => (!!state.formInputs.name)

		// Submit click handler when form submit is clicked
		// Will first validate form
		// If validation is good, log form data as json object and close modal
		this.onSubmitClickHandler = (event) => {
			event.preventDefault();

			let isValid = this.validateForm(this.state);

			this.setState({
				isShowError: true,
				isValid: isValid
			}, () => {
				if (this.state.isValid) {
					let finalFormDataOutput = Object.assign({}, this.state.formInputs, {variation: this.props.variation});

					console.log(finalFormDataOutput);
					this.props.onFormSubmitHandler();
				}
			})
		}
	}

	render() {
		let { isShowError } = this.state,
			{name, email, phone, address, city, state, zip} = this.state.formInputs;

		return (
			<form className="form" autoComplete="off" onChange={this.onFormChangeHandler}>
				<div className="form-input-container">
					<FormInput name="name" type="textfield" placeholder="Name" value={name} isShowError={isShowError} required/>
					<FormInput name="email" type="email" placeholder="Email" value={email}/>
					<FormInput name="phone" type="tel" placeholder="Phone" value={phone}/>
					<FormInput name="address" type="textfield" placeholder="Address" value={address}/>
					<FormInput name="city" type="textfield" placeholder="City" value={city}/>
					<div className="form-address-container">
						<SelectInput value={state}/>
						<FormInput name="zip" type="textfield" placeholder="Zip" value={zip}/>
					</div>
				</div>
				<div className="form-image-container">
					<img className="form-image" src={require(`images/${this.props.variation}.png`)} />
					<button className="button button--submit" onClick={this.onSubmitClickHandler} type="submit">Submit</button>
				</div>
			</form>
		)
	}
}

Form.propTypes = {
	variation: PropTypes.string.isRequired,
	onFormSubmitHandler: PropTypes.func.isRequired
}

module.exports = Form