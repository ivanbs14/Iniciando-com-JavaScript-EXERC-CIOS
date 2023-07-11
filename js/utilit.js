//function operation SUM
export const playSum = function(firNum, secNum) {
    return ((firNum + secNum).toFixed(0))
} 

// function passar retorno boolen
export function notANumber(value) {
    return isNaN(value) || value == ""
}

//function operation Subtracao
export const playSubtraction = function(firNumbrSb, secNumbrSb) {
    return ((firNumbrSb - secNumbrSb).toFixed(0))
} 

//function operation Multiplicacao
export const playMultiplication = function(firNumbrMult, secNumbrMult) {
    return ((firNumbrMult * secNumbrMult).toFixed(0))
} 

//function operation divisão
export const playDivs = function(firNumbrDiv, secNumbrDiv) {
    return ((firNumbrDiv / secNumbrDiv).toFixed(0))
} 
