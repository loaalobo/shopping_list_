const input = document.getElementById("userinput");
const button = document.getElementById("enter");
const conteinerLista = document.querySelector('ul');

function inputLength() {
    return input.value.length;
}

function addItem() {
    if (inputLength() > 0) {
        let itemLista = document.createElement('li');
        itemLista.appendChild(document.createTextNode(input.value));
        conteinerLista.appendChild(itemLista);

        let botaoDel = document.createElement('button');
        botaoDel.appendChild(document.createTextNode('excluir'));
        itemLista.append(botaoDel);

        botaoDel.addEventListener('click', function () {
            itemLista.remove();
        })

        itemLista.addEventListener('click', function () {
            itemLista.classList.toggle('done');
        });
        input.value = '';
    }
    else { alert('[erro]') }
}

button.addEventListener('click', addItem); // callback function: automatically gets run

input.addEventListener('keypress', function (event) {
    if (event.code === 'Enter') {
        addItem();
    }
});
F