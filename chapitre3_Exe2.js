// Define a recursive function isEven that accept a single parameter and return a Boolean

function isEven (num) {
    if (num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    } else if (num < 0) {
        return 'Please enter a positive whole number';
    } else {
        return isEven(num -2);
    }
}