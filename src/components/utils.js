const randomlySelectModalVariation = (variationList) => (variationList[Math.floor(Math.random() * variationList.length)] )

const setModalVariation = (modalVariationKey, variationList) => {
	let variation = randomlySelectModalVariation(variationList);

	if (!(modalVariationKey in window.localStorage)) {
		window.localStorage[modalVariationKey] = variation;
	}
}

const getModalVariation = (modalVariationKey) => (window.localStorage[modalVariationKey])

const clearModalVariation = (modalVariationKey) => {
	window.localStorage.clear(modalVariationKey);
	window.location.reload();
}

module.exports = {
	randomlySelectModalVariation,
	setModalVariation,
	getModalVariation,
	clearModalVariation
}