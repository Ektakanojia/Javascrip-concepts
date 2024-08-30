function getItemFromLocalStorage(){
    const item = localStorage.getItem('items');
    return item ? JSON.parse(item):[];
}
function saveItemsToLocalStorage(items){
localStorage.setItem('items',JSON.stringify(items));
}
// Function to render items from localStorage
// const renderItems = () => {
    
//     const items = getItemFromLocalStorage();
//     console.log("render item function is called")
//     const itemList = document.getElementById('itemList');
//     itemList.innerHTML = ''; // Clear current items

//     items.forEach((item) => {
//         const itemContainer = createItemElement(item.text);
//         itemList.appendChild(itemContainer);
//     });
// };

function addItemToList(){
// Get the input value
const newItemText = document.getElementById('addItem').value;
if(newItemText.trim() === "") return;

const items = getItemFromLocalStorage();
items.push({text:newItemText});
saveItemsToLocalStorage(items);

//renderItems();
//document.getElementById('addItem').value = '';  

// Create a new container div for the item
const itemContainer = document.createElement('div');
itemContainer.style.display = 'flex';
itemContainer.style.alignItems = 'center';
itemContainer.style.gap = '10px';
itemContainer.style.backgroundColor = 'rgb(255, 255, 255)';
itemContainer.style.width = '50%';
itemContainer.style.height = '50px';
itemContainer.style.border = '1px solid black';
itemContainer.style.padding = '0 10px';
itemContainer.style.fontSize = '16px';

// Create a div for the item text
const itemTextDiv = document.createElement('div');
itemTextDiv.textContent = newItemText;
itemTextDiv.style.flex = '1'; // Allows text to take up available space
itemContainer.appendChild(itemTextDiv);

// Create and add Remove button
const removeButton = document.createElement('button');
removeButton.textContent = 'Remove';
removeButton.style.backgroundColor = 'black';
removeButton.style.color = 'white';
removeButton.style.borderRadius = '3px';
removeButton.style.height = '30px';
removeButton.style.border = 'none';
removeButton.style.padding = '0 15px';
removeButton.onclick = () => itemContainer.remove(); // Remove item on click
itemContainer.appendChild(removeButton);

// Create and add Edit button
const editButton = document.createElement('button');
editButton.textContent = 'Edit';
editButton.style.backgroundColor = 'black';
editButton.style.color = 'white';
editButton.style.borderRadius = '3px';
editButton.style.height = '30px';
editButton.style.border = 'none';
editButton.style.padding = '0 15px';
editButton.onclick = () => {
    const newText = prompt('Edit the task:', itemTextDiv.textContent);
    if (newText !== null) {
        itemTextDiv.textContent = newText;
    }
}; // Edit item text on click
itemContainer.appendChild(editButton);

// Append the new item container to itemList
document.getElementById('itemList').appendChild(itemContainer);

// Clear the input field after adding
document.getElementById('addItem').value = '';
}
