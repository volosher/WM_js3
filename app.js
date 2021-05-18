
let names = ['vova', 'jeck', 'ripper', 'denni', 'mike', 'serg', 'staska',
            'sebastian', 'stradivari', 'paul', 'ihtiandr', 'petrovich',
            'Ulrich', 'semidevis', 'pababasov', 'incognito', 'sten',
            'roma', 'lenin', 'obama'];

const showNames = document.querySelector(".main");

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function randomFontSize(elem) {
    const min = 0;
    const max = 4;
    let addedFontSize = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    elem.style.fontSize = 10 + addedFontSize + "px";
}

function randomTextTransform(elem) {
    const min = 0;
    const max = 1;
    let option = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    if (option === 0) {
        elem.style.textTransform = 'uppercase';
    } else {
        elem.style.textTransform = 'lowercase';
    }

}

function randomAlign(elem) {
    const min = 0;
    const max = 2;
    let option = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    if (option === 0) {
        elem.style.textAlign = 'left';
    } else if (option === 1){
        elem.style.textAlign = 'right';
    } else {
        elem.style.textAlign = 'center';
    }

}



function render() {
    shuffle(names);
    showNames.innerHTML = '';
    names.forEach(elem => {
                const newElement = document.createElement("p");
                newElement.innerHTML = elem;
                showNames.appendChild(newElement);
            });
}

function addRandStyle () {
    const elements = document.querySelectorAll('p');
    elements.forEach(elem => {
        randomTextTransform(elem);
        randomAlign(elem);
        randomFontSize(elem);
    })
}

const btn = document.querySelector('.button28');
btn.addEventListener('click', () => {

    render();
    addRandStyle ();
});





