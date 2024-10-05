import { createListItem } from "./createListItem.js";
import { checkEmptyList } from "./checkEmptyList.js";

const inputItem = document.querySelector('#input-add');
const listBuy = document.querySelector('.list');

export function addItem(e) {
    e.preventDefault();

    const listItem = createListItem(inputItem.value);
    listBuy.appendChild(listItem);
    inputItem.value = '';
    checkEmptyList(listBuy);
}