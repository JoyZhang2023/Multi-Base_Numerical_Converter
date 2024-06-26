export function decToBase(inputNumber, inputBase) {
    if (inputBase < 2 || inputBase > 16) {
        return "Not Valid Base";
    }
    return inputNumber.toString(inputBase);
}

export function convertToDec(inputNumber, inputBase) {
    if (inputBase < 2 || inputBase > 16) {
        return "Not Valid Base";
    }
    return parseInt(inputNumber, inputBase);
}

export default function NumericalConverter(inputNumber, inputBase, outputBase) {
    var trans = convertToDec(inputNumber, inputBase);
    return decToBase(trans, outputBase);
}