export function decToBase(inputNumber, inputBase) {
    if (inputBase >= 2 && inputBase <= 16) {
        return inputNumber.toString(inputBase);
    }else {
        return "Not valid output base";
    }
    
}

export function convertToDec(inputNumber, inputBase) {
    if (inputBase >= 2 && inputBase <= 16) {
        return parseInt(inputNumber, inputBase);
    }else {
        return "Not valid input base";
    }
    
    
}

export default function NumericalConverter(inputNumber, inputBase, outputBase) {
    let trans = convertToDec(inputNumber, inputBase);
    return decToBase(trans, outputBase);
}