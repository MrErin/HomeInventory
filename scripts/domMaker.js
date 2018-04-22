//hook in the HTML
const stuffHook = document.querySelector('#myStuff')
const fragment = document.createDocumentFragment()

// prints all content to the DOM inside table rows and with each piece available to be styled as cards

// const displayStuff = (selectedType) => {
// 	for(let type in homeInv) {
// 		if (!type || type === selectedType){
// 			let row = document.createElement('div')
// 			row.classList = ' ' + type + 'Row row'
// 			homeInv[type].forEach(itemInArray => {
// 				const itemCard = document.createElement ('section')
// 				itemCard.classList = ' ' + type + 'Card card'
// 				for (let prop in itemInArray) {
// 					const pComponent = document.createElement('p')
// 					pComponent.textContent = itemInArray[prop]
// 					itemCard.appendChild(pComponent)
// 				}
// 				row.appendChild(itemCard)
// 			})
// 			fragment.appendChild(row)
// 		}
// 	}
// 	stuffHook.appendChild(fragment)
// }


const displayStuff = (selectedType) => {
	
	//iterate over the tables in the database
	for (let type in homeInv) {
		//create an element to hold three cards
		let row = componentFactory('row')
		row.classList = ' ' + homeInv[type] + 'Row row'
		//for now, print everything. But this is where we will add the if condition for filtering
		homeInv[type].forEach(itemInArray => {
			const itemCard = componentFactory('card')
			itemCard.classList = ' ' + type + 'Card card'
			for (let prop in item) {
				const pComponent = componentFactory('p', item[prop])
				appendinator(itemCard, pComponent)
			}
			
			appendinator(row, itemCard)
			cardIterator++
		})
		appendinator(fragment, row)
	}
	appendinator(stuffHook, fragment)
}