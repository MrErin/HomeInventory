//hook in the HTML
const stuffHook = document.querySelector('#myStuff')
const fragment = document.createDocumentFragment()

const displayStuff = (selectedType) => {
	//iterate over the tables in the database and apply selection criteria if present
	for (let type in homeInv) {
		if (type === selectedType || !selectedType) {
			homeInv[type].forEach(itemInArray => {
				const itemCard = componentFactory('card', '')
				itemCard.classList = ' ' + type + 'Card card'
				for (let prop in itemInArray) {
					const pComponent = componentFactory('p', itemInArray[prop])
					appendinator(itemCard, pComponent)
				}
				appendinator(fragment, itemCard)
			})
		}
		appendinator(stuffHook, fragment)

	}
}