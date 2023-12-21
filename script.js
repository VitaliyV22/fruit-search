const inputEl = document.querySelector("#fruit");

const suggestions = document.querySelector("#suggestions");


const fruits = ['Apple 🍎', 'Apricot', 'Avocado 🥑', 'Banana 🍌', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry 🍒', 'Coconut 🥥', 'Cranberry', 'Cucumber 🥒', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape 🍇', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon 🍋', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango 🥭', 'Mangosteen', 'Marionberry', 'Melon 🍈', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive 🫒', 'Orange 🟠', 'Clementine', 'Mandarine', 'Tangerine 🍊', 'Papaya', 'Passionfruit', 'Peach 🍑', 'Pear 🍐', 'Persimmon', 'Plantain', 'Plum', 'Pineapple 🍍', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry 🍓', 'Tamarillo', 'Tamarind', 'Yuzu'];


inputEl.addEventListener("input", search);

// Function to handle the search logic based on the input value
function search() {
  // Remove any existing autocomplete suggestions
  removeAutoCompeleteList();

  const value = inputEl.value.toLowerCase();

  // If the input is empty, do nothing
  if (value.length === 0) return;

  // Filter the fruits array based on the input value
  let results = fruits.filter((el) => el.toLowerCase().includes(value));

  // Create and display the autocomplete suggestion list
  createList(results);
}

// Function to create the autocomplete suggestion list
function createList(list) {
  const value = inputEl.value.toLowerCase();

  const suggestedList = document.createElement("ul");
  suggestedList.className = "list";
  suggestedList.id = "list";

  // Loop through the filtered list of suggestions and create list items with buttons
  for (let i in list) {
    const suggestedItem = document.createElement("li");
    const fruitButton = document.createElement("button");

    // Bold the matching part of the suggestion and capitalize the result
    const boldFruit = list[i]
      .toLowerCase()
      .replaceAll(value, `<b>${value}</b>`);
    const boldFruitCap = capitalizeBoldResult(boldFruit);
    fruitButton.innerHTML = boldFruitCap;

    // Add click event listener to each suggestion button
    fruitButton.addEventListener("click", fruitSelect);

    suggestedItem.appendChild(fruitButton);
    suggestedList.appendChild(suggestedItem);
  }

  suggestions.appendChild(suggestedList);
}

// Function to capitalize the first letter of the bolded result
function capitalizeBoldResult(boldFruit) {
  if (boldFruit[0] === "<") {
    return `<b>${boldFruit.charAt(3).toUpperCase()}${boldFruit.slice(4)}`;
  } else {
    return `${boldFruit.charAt(0).toUpperCase()}${boldFruit.slice(1)}`;
  }
}

// Function to remove the autocomplete suggestion list
function removeAutoCompeleteList() {
  const suggestedItem = document.querySelector("#list");
  if (suggestedItem) suggestedItem.remove();
}

// Function to handle the selection of a fruit from the autocomplete suggestions
function fruitSelect(e) {
  // Get the selected button's inner HTML and set it as the input value
  const buttonEL = e.target;
  inputEl.value = buttonEL.innerHTML.replace(/(<([^>]+)>)/gi, "");

  removeAutoCompeleteList();
}
