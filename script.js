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
        botaoDel.appendChild(document.createTextNode('x'));
        botaoDel.classList.add('delete');
        itemLista.append(botaoDel);

        botaoDel.addEventListener('click', function () {
            itemLista.remove();
        })

        itemLista.addEventListener('click', function () {
            itemLista.classList.toggle('done');
        });
        input.value = '';
    }
    else { alert("sorry... but first you need to add some item.") }
}

button.addEventListener('click', addItem); // callback function: automatically gets run

input.addEventListener('keypress', function (event) {
    if (event.code === 'Enter') {
        addItem();
    }
});

let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
        + color1.value + ", " + color2.value + ")";
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
