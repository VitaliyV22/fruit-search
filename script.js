const inputEl = document.querySelector('#fruit')
const suggestions = document.querySelector('#suggestions');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

inputEl.addEventListener("input", search)

function search() {
	removeAutoCompeleteList()
	const value = inputEl.value.toLowerCase()

	if (value.length === 0) return

	let results = fruits.filter((el) => el.toLowerCase().includes(value))
	


	createList(results)
}


function createList(list) {
	const value = inputEl.value.toLowerCase()

	const suggestedList = document.createElement("ul")
	suggestedList.className = "list"
	suggestedList.id ="list"

	for (let i in list){
		const suggestedItem = document.createElement("li")
		const fruitButton =document.createElement("button")
	

		
		const boldFruit = list[i].toLowerCase().replaceAll(value, `<b>${value}</b>` )
		
		const boldFruitCap = capitalizeBoldResult(boldFruit)
		fruitButton.innerHTML = boldFruitCap
		
		

		fruitButton.addEventListener("click", fruitSelect)
		
		suggestedItem.appendChild(fruitButton)
		
		suggestedList.appendChild(suggestedItem)

	}



	suggestions.appendChild(suggestedList)
}

function capitalizeBoldResult(boldFruit) {
	if (boldFruit[0] === '<') {
	  return `<b>${boldFruit.charAt(3).toUpperCase()}${boldFruit.slice(4)}`;
	} else {
	  return `${boldFruit.charAt(0).toUpperCase()}${boldFruit.slice(1)}`;
	}
  }

function removeAutoCompeleteList() {
	const suggestedItem = document.querySelector("#list")
	if (suggestedItem) suggestedItem.remove()
}

function fruitSelect(e) {
	

	const buttonEL = e.target
	inputEl.value = buttonEL.innerHTML.replace(/(<([^>]+)>)/gi, "");
	


	removeAutoCompeleteList()
}