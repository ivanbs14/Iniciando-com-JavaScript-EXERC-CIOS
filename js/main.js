
import { notANumber, playSum, playSubtraction, playMultiplication, playDivs } from './utilit.js';

const form = document.querySelector('form');

const formOne = document.querySelector('#formOne');
const inputFirNumbr = document.querySelector('#firNumbr');
const inputSecNumbr = document.querySelector('#height');

const formTwo = document.querySelector(`#formTwo`);
const inputIfNumber = document.querySelector(`#ifNumbr`);

const formTree = document.querySelector(`#formTree`);
const inputIfString = document.querySelector('#ifString');

const formFour = document.querySelector(`#formFour`);
const inputIfBoolean = document.querySelector(`#ifBoolean`);

const formFive = document.querySelector(`#formFive`);
const inputFirNumbrSb = document.querySelector(`#firNumbrSb`);
const inputSecNumbrSb = document.querySelector(`#secNumbrSb`);

const formSix = document.querySelector(`#formSix`);
const inputFirNumbrMult = document.querySelector(`#firNumbrMult`);
const inputSecNumbrMult = document.querySelector(`#secNumbrMult`);

const formSeven = document.querySelector(`#formSeven`);
const inputFirNumbrDiv = document.querySelector(`#firNumbrDiv`);
const inputSecNumbrDiv = document.querySelector(`#secNumbrDiv`);

const formEigth = document.querySelector(`#formEigth`);
const inputNumbrEigt = document.querySelector(`#firNumbrEigth`);

const formNine = document.querySelector(`#formNine`);
const inputNumbrNine = document.querySelector(`#firNumbrNine`);

// function to display Text
form.onsubmit = (event) => {
    event.preventDefault()

    alert('Hello World!')
};

// function to display Sum
formOne.onsubmit = (event) => {
    event.preventDefault()
    
    const firNum = Number(inputFirNumbr.value)
    const secNum = Number(inputSecNumbr.value)

    const showAlertError = notANumber(firNum) || notANumber(secNum)

    if(showAlertError) {
        return alert(`Digite apenas números`)
    }
    
    const resultSum = playSum(firNum, secNum)

    alert(`O resultado da soma é ${resultSum}`)
};

// checking if it is a number or not
formTwo.onsubmit = (event) => {
    event.preventDefault()
    
    const ifNum = Number(inputIfNumber.value)

    const showAlertError = notANumber(ifNum)

    if(showAlertError) {
        return alert(`Você não digitou um número`)
    }

    alert(`Você digitou o número ${ifNum}.`)
};

// checking if it is a STRING or not
formTree.onsubmit = (event) => {
    event.preventDefault()
    
    const ifString = Number(inputIfString.value)

    const showAlertError = notANumber(ifString)

    if(showAlertError) {
        return alert(`É uma string.`)
    }

    alert(`Não é uma string.`)
};

// checking if it is boolean
formFour.onsubmit = (event) => {
    event.preventDefault()
    
    const ifBoolean = inputIfBoolean.value;

    if (ifBoolean === 'true' || ifBoolean === 'false') {
        alert(`É um booleano`)
      } else {
        alert('Não é um booleano')
      }
};

// function to display SUBTRACTION
formFive.onsubmit = (event) => {
    event.preventDefault()

    const firNumbrSb = inputFirNumbrSb.value;
    const secNumbrSb = inputSecNumbrSb.value;

    const showAlertError = notANumber(firNumbrSb) || notANumber(secNumbrSb)

    if(showAlertError) {
        return alert(`Digite apenas números`)
    }
    
    const resultSubt = playSubtraction(firNumbrSb, secNumbrSb)

    alert(`O resultado da subtração é ${resultSubt}`)
}

// function to display Multiplication
formSix.onsubmit = (event) => {
    event.preventDefault()

    const firNumbrMult = inputFirNumbrMult.value;
    const secNumbrMult = inputSecNumbrMult.value;

    const showAlertError = notANumber(firNumbrMult) || notANumber(secNumbrMult)

    if(showAlertError) {
        return alert(`Digite apenas números`)
    }
    
    const resultMult = playMultiplication(firNumbrMult, secNumbrMult)

    alert(`O resultado da multiplicação é ${resultMult}`)
}

// function to display Divisão
formSeven.onsubmit = (event) => {
    event.preventDefault()

    const firNumbrDiv = inputFirNumbrDiv.value;
    const secNumbrDiv = inputSecNumbrDiv.value;

    const showAlertError = notANumber(firNumbrDiv) || notANumber(secNumbrDiv)

    if(showAlertError) {
        return alert(`Digite apenas números`)
    }
    
    const resultDiv = playDivs(firNumbrDiv, secNumbrDiv)

    alert(`O resultado da multiplicação é ${resultDiv}`)
}

// function to display Par
formEigth.onsubmit = (event) => {
    event.preventDefault()

    const firNumbrEgt = Number(inputNumbrEigt.value);

    const showAlertError = notANumber(firNumbrEgt);

    if(showAlertError) {
        return alert(`Digite apenas números`)
    }
    
    if (firNumbrEgt % 2 === 0) {
        alert(`Número ${firNumbrEgt}. Este numero é Par`)
      } else {
        alert(`Aviso: este numero não é Par`)
      }
}

// function to display Par ou Impar
formNine.onsubmit = (event) => {
    event.preventDefault()

    const firNumbrNin = Number(inputNumbrNine.value);

    const showAlertError = notANumber(firNumbrNin);

    if(showAlertError) {
        return alert(`Digite apenas números`)
    }
    
    if (firNumbrNin % 2 === 0) {
        alert(`Aviso: este numero não é Impar`)
      } else {
        alert(`Número ${firNumbrNin}. Este numero é Impar`)
      }
}