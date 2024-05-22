const text = document.getElementById('text');
//console.log(text);
const submit = document.getElementById('submit');
//console.log(submit);
const search=document.getElementById('search');

const items_container=document.getElementById('items_container');

function addItemToList(event){
    event.preventDefault();

    const inputValue = text.value.trim();

    if(inputValue !=''){
        const listItem = document.createElement('li');
        listItem.className='custom-list-item';
        listItem.innerText=inputValue;

        const deleteButton = document.createElement('button');
        deleteButton.className='float-right bg-red-600 w-9 h-9 rounded-sm p-2';
        deleteButton.innerText='x';
        deleteButton.classList.add('deleteButton');
        
        // deleteButton.addEventListener('click', function() {
        //     listItem.remove();
        // });

        listItem.appendChild(deleteButton);
        items_container.appendChild(listItem);

        text.value='';
    }
}

submit.addEventListener('click',addItemToList);

function filterItems() {
    const searchText = search.value.toLowerCase();
    const items = items_container.querySelectorAll('.custom-list-item');

    items.forEach((item) => {
        const itemText = item.childNodes[0].textContent.toLowerCase();
        if (itemText.includes(searchText)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

search.addEventListener('input',filterItems);


function handleDeleteButtonClick(event) {
    if (event.target.classList.contains('deleteButton')) {
        event.target.parentElement.remove();
    }
}

items_container.addEventListener('click', handleDeleteButtonClick);

