const editItem = (element) => {
    let newItem = prompt('Digite o novo o item: ');
    
    if (newItem !== null) {
        const itemTextUpdate = element.querySelector('#item-title'); 
        const date = element.querySelector('.item-date');
        itemTextUpdate.textContent = newItem;
        date .textContent = `${new Date().toLocaleDateString('pt-BR', {weekday: 'long'})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric' })}`;
    }
};

export { editItem };