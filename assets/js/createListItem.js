import { checkPurchasedList } from "./checkPurchasedList.js";
import { deleteItem } from "../js/deleteItem.js";
import { editItem } from "./editItem.js";

const listBuied = document.querySelector('.list-buied');
const listBuy = document.querySelector('.list');
let contador = 0;

export function createListItem(inputItem) {
    const itemList = document.createElement('li');
    const containerTop = document.createElement('div');
    itemList.classList.add('item-list');
    containerTop.classList.add('container-top');
    
    /* Checkbox */
    const containerCheckbox = document.createElement('div');
    containerCheckbox.classList.add('checkbox-container');
    
    
    const inputCheck = document.createElement('input');
    inputCheck.type = "checkbox";
    inputCheck.classList.add('checkbox-input');
    inputCheck.id = "checkbox-" + contador++
    
    const labelCheck = document.createElement('label');
    labelCheck.setAttribute("for", inputCheck.id);
    labelCheck.addEventListener('click', (e) => {
        const checkboxInput = e.currentTarget.querySelector('.checkbox-input');
        const checkboxCustom= e.currentTarget.querySelector('.checkbox-custom');
        const itemTitle = e.currentTarget.closest('li').querySelector('#item-title');

        if (checkboxInput.checked) {
            checkboxCustom.classList.add('checked');
            listBuied.appendChild(itemList);
            itemTitle.style.textDecoration = 'line-through';
            checkPurchasedList(listBuied);
        } else {
            checkboxCustom.classList.remove('checked');
            listBuy.appendChild(itemList);
            itemTitle.style.textDecoration = 'none';
            checkPurchasedList(listBuied);
        }
    });

    const customCheckbox = document.createElement('div');
    customCheckbox.classList.add('checkbox-custom');
    
    const containerNameItem = document.createElement('div');  
    containerNameItem.classList.add('container-name');

    const nameItem = document.createElement('h3');
    nameItem.id = 'item-title'
    nameItem.innerText += inputItem;

    /* Buttons */
    const containerButtons = document.createElement('div');  
    containerButtons.classList.add('container-buttons');
    const buttonDelete = document.createElement('button');
    const buttonEdit = document.createElement('button');

    buttonDelete.addEventListener('click', () => {
        deleteItem(itemList);
    });
    buttonEdit.addEventListener('click', () => {
        editItem(itemList);
    });

    /* Icons buttons */
    const iconDelete = document.createElement('ion-icon');
    const iconEdit = document.createElement('ion-icon');
    iconDelete.name = 'trash';
    iconEdit.name = 'pencil-outline';

    const itemDate = document.createElement('p');
    itemDate.innerText = `${new Date().toLocaleDateString('pt-BR', {weekday: 'long'})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric' })}`;
    itemDate.classList.add('item-date');

    itemList.appendChild(containerTop);
    itemList.appendChild(itemDate);
    containerTop.appendChild(containerNameItem);
    containerTop.appendChild(containerButtons);

    containerCheckbox.appendChild(labelCheck);
    labelCheck.appendChild(inputCheck); 
    labelCheck.appendChild(customCheckbox); 

    containerNameItem.appendChild(containerCheckbox);
    containerNameItem.appendChild(nameItem);
    containerButtons.appendChild(buttonDelete); 
    containerButtons.appendChild(buttonEdit); 
    buttonDelete.appendChild(iconDelete);
    buttonEdit.appendChild(iconEdit);
    return itemList;
}