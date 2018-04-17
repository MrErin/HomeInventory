//hook in the HTML
const stuffHook = document.querySelector('#myStuff')
const fragment = document.createDocumentFragment()

// // creates a section for every item in the database with no other differentiation (everything at the same level and in the same section)

// for (let monkeyButt in homeInv) {
// 	const currentType = homeInv[monkeyButt]
// 	currentType.forEach(itemInArray => {
// 		const itemSection = document.createElement ('section')

// 		for(let prop in itemInArray) {
// 			const pComponent = document.createElement ('p')
// 			pComponent.textContent = itemInArray[prop]
// 			itemSection.appendChild(pComponent)

// 		}
// 		stuffHook.appendChild(itemSection)
// 	})
// }


const displayStuff = () => {
	for(let type in homeInv) {
		let row = document.createElement('div')
		row.classList = ' ' + homeInv[type] + 'tableRow'

		homeInv[type].forEach(itemInArray => {
			const itemCard = document.createElement ('section')
			itemCard.classList = ' ' + type.value + 'Card'
			for (let prop in itemInArray) {
				const pComponent = document.createElement('p')
				pComponent.textContent = itemInArray[prop]
				itemCard.appendChild(pComponent)
			}
			row.appendChild(itemCard)
		})
		stuffHook.appendChild(row)
	}
}

// creates sections for every element in one of the tables, with a table being an argument
//need for loop, then if condition, then define current type

// const getStuff = (currentType) => {
// 	console.log(currentType)
// 	for (let i = 0; i < homeInv.length; i++) {
// 		if (currentType === homeInv[type])

// 			for (let type in homeInv[i]) {
// 			// if (currentType === homeInv[type])
// 				console.log(currentType)
// 			}
// 	}
// }


// getStuff('books')