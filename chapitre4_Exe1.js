
function range (startNumber, endNumber, step = 1) {
    let arr = [];
    if (startNumber < endNumber) {
        for (let i = startNumber; i <= endNumber; i += step) {
            arr.push(i);
        }
    } else if (startNumber > endNumber) {
        step = Math.abs(step);
        for (let j = startNumber; j >= endNumber; j -= step) {
            arr.push(j);
        }
    }

    return arr;
}

const arrOneToTen = range(1, 10, 2);
console.log(arrOneToTen);

function sum (arrNumbers) {
    let total = 0;
    for (let j = 0; j <= arrNumbers.length; j++) {
        total = total + j;
    }
    return total;
}

const finalResult = sum(arrOneToTen);
console.log(finalResult);
