const React = require('react'),
	ReactDOM = require('react-dom'),
	Config = require('./components/config'),
	AppUtils = require('./components/utils'),
	Header = require('./components/header'),
	Content = require('./components/content'),
	ModalButton = require('./components/modalButton'),
	Modal = require('./components/modal'),
	Form = require('./components/form');

require('./index.css');

class App extends React.Component {
	constructor(props) {
		super(props);

		// Initialize A/B test by storing variation as key in localStorage
		this.init();

		this.state = {
			variation: AppUtils.getModalVariation(Config.modalVariationConfig.label),
			isModalOpen: false,
			modalContentElement: null
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	init() {
		let { label, options } = Config.modalVariationConfig;

		AppUtils.setModalVariation(label, options);
	}

	openModal(modalContentElement) {
		this.setState({
			isModalOpen: true,
			modalContentElement: modalContentElement
		})
	}

	closeModal() {
		this.setState({
			isModalOpen: false
		})
	}

	render() {
		let { isModalOpen, variation, modalContentElement } = this.state,
			formElement = <Form variation={variation} onFormSubmitHandler={this.closeModal}/>;

		return (
			<main className="main">
				<Header logo="Software Advice &reg;" />
				<Content header={`We've Simplified Software Selection - ${variation}`}>
					<ModalButton 
						openModalHandler={this.openModal}
						modalContentElement={formElement}
						/>
				</Content>
				{modalContentElement && 
					<Modal
						closeModalHandler={this.closeModal}
						isModalOpen={isModalOpen}
						modalContentElement={modalContentElement}/>
				}
			</main>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));