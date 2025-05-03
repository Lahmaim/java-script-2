function reverseString(word) {
    let lastOne = word.length - 1;
    let reverse = "";

    for (const i in word) {
        reverse += word[lastOne];
        lastOne--;
    }

    return reverse;
}


function charCount(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] != " ") {
            count++;
        }
    }
    return count;
}


function capitalizesLetter(sentences) {
    let lowerCase = sentences.toLowerCase().split(" ");

    let senArr = "";
    for (const i in lowerCase) {
        let first = lowerCase[i].charAt(0).toUpperCase();
        senArr += first + lowerCase[i].substring(1) + " ";
    
    }

    return senArr.trim();

 
}


function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return [min, max];
}
console.log(minMax([3, 1, 99, -4, 0, 100]));

function sumOfArray(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
}
console.log(sumOfArray([3, 1, 99, -4, 0, 100]));

function filterArray(arr, condition) {
    let array = [];
    for (const i in arr) {
        if (condition == arr[i]) {
            array.push(arr[i]);
        }
    }
    return array;
}


function factorial(num) {
    let factorial = num;
    while (num > 1) {
        num--;
        factorial = factorial * num;
    }
    console.log(factorial);
}
factorial(10);

function numberPrime(num) {
    if (num % 2 != 0 || num >= 2) {
        return true;
    } else {
        return false;
    }
}

function fibonacciSequence(num) {
    if (num < 2) {
        return num;
    }

    return fibonacciSequence(num - 1) + fibonacciSequence(num - 2);
}
