import { checkEmptyList } from "./checkEmptyList.js";
import { checkPurchasedList } from "./checkPurchasedList.js";

const shoppingList = document.querySelector('.list');
const purchasedList = document.querySelector('.list-buied');

const deleteItem = (item) => {
    const confirmItem = confirm('Você tem certeza que deseja excluir esse item?');

    if (confirmItem) {
        item.remove();

        checkEmptyList(shoppingList);
        checkPurchasedList(purchasedList);
    };
}

export { deleteItem };