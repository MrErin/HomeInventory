const componentFactory = (type, contents) => {
	const component = document.createElement(type)
	component.textContent = contents
	return component
}

// const card = (type, contents) => componentFactory('card', ...contents)
// const tableRow = (type, contents) => componentFactory('row', ...contents)
// const graph = (type, contents) => componentFactory('p', ...contents)
