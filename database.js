const loadDatabase = (localStorageKey) => {
	const databaseString = localStorage.getItem(localStorageKey)
	return JSON.parse(databaseString)
}

// load the database
const homeInv = loadDatabase('HomeInventory')

//hook in the HTML
const inventoryEl = document.querySelector('#myStuff')

//creates a section for every item in the database with no other differentiation (everything at the same level and in the same section)

// for (let type in homeInv) {
// 	const currentType = homeInv[type]

// 	currentType.forEach(itemInArray => {
// 		const itemSection = document.createElement ('section')

// 		for(let prop in itemInArray) {
// 			const pComponent = document.createElement ('p')
// 			pComponent.textContent = itemInArray[prop]
// 			itemSection.appendChild(pComponent)

// 		}
// 		inventoryEl.appendChild(itemSection)
// 	})
// }



// // creates sections for every element in one of the tables, with a table being an argument
// //need for loop, then if condition, then define current type

const getStuff = (currentType) => {
	console.log(currentType)
	for (let i = 0; i < homeInv.length; i++) {
		if (currentType === homeInv[type])

			for (let type in homeInv[i]) {
			// if (currentType === homeInv[type])
				console.log(currentType)
			}
	}
}


getStuff('books')