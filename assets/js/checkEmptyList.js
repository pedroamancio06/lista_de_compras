const messageEmptyList = document.querySelector('#message-list');

export function checkEmptyList(list) {
    if (list.querySelectorAll('li').length === 0 ) {
        messageEmptyList.style.display = 'block';
    } else {
        messageEmptyList.style.display = 'none';
    }
}