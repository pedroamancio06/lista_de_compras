const purchasedList = document.querySelector('.title-buied');

export function checkPurchasedList(listItens) {
    if (listItens.childElementCount === 0 ) {
        purchasedList.style.display = 'none';
    } else {
        purchasedList.style.display = 'block';
    }
}