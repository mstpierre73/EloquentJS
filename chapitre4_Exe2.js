function reverseArray(arr) {
    const newArr = arr.slice();
    const reverseArray = [];
    for (let i = newArr.length-1; i >= 0; i--) {
        reverseArray.push(newArr[i]);
    }
    return reverseArray;
}