class Keypad {
    constructor() {
        this.keypadDisplayNumber = keypadDisplayNumber;
        this.Number = '';
        this.clear();
    }

    clear() {
        this.Number = '';
    }

    delete() {
        this.Number = this.Number.toString().slice(0, -1);
    }

    appendNumber(currentNumber) {
        if (this.Number.length <= 3) {
            this.Number = this.Number + currentNumber.toString();
        }
        else {
            return;
        }
    }

    display() {
        this.keypadDisplayNumber.value = this.Number;
    }
}

const pinGeneratorButton = document.querySelector('[pin-generator]');
const randomPin = document.querySelector('[random-pin]');
const keypadNumber = document.querySelectorAll('[keypad-number]');
const keypadDelete = document.querySelector('[keypad-delete]');
const keypadClear = document.querySelector('[keypad-clear]');
const keypadDisplayNumber = document.querySelector('[keypad-display]');
const isMatched = document.querySelector('[is-matched]');
const notMatched = document.querySelector('[not-matched]');
const pinSubmit = document.querySelector('[pin-submit]');
const tryLeft = document.querySelector('[try-left]');


const key = new Keypad(this.keypadDisplayNumber);


function randomGenerator() {
    let randomNumber = '';
    for (let i = 0; i<4; i++) {
        let temp = Math.floor(Math.random() * 10);
        randomNumber = randomNumber + temp;
    }

    return randomNumber;
}


pinGeneratorButton.addEventListener('click', () => {
    randomPin.value = randomGenerator();
})

keypadNumber.forEach(keypadNumber => {
    keypadNumber.addEventListener('click', () => {
        key.appendNumber(keypadNumber.textContent);
        key.display();
    })
})

keypadClear.addEventListener('click', () => {
    key.clear();
    key.display();
})

keypadDelete.addEventListener('click', () => {
    key.delete();
    key.display();
})


pinSubmit.addEventListener('click', () => {
    if (randomPin.value == keypadDisplayNumber.value) {
        isMatched.style.display = 'block';
        notMatched.style.display = 'none';
    }
    else {
        notMatched.style.display = 'block';
        isMatched.style.display = 'none';
    }
})

