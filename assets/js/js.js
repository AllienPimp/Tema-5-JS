// 1. display in the console the numbers from 1 to 20
function printNumbers(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
number = printNumbers(20);

console.log('----------------------------------- ex 1 end');

// 2. display in the console the odd numbers from 1 to 20

function printOddNumbers(lastNumber) {
    for (var i = 1; i <= lastNumber; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}
number = printOddNumbers(20);

console.log('----------------------------------- ex 2 end');

// 3. compute the sum of the elements of an array and display it in the console

function sumOfElements(arrayElements) {
    var sum = 0;
    for (var index = 0; index < arrayElements.length; index++) {
        sum = sum + arrayElements[index];
    }
    return sum;
}
console.log(sumOfElements([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// var array = [1, 2, 3];
// x = sumOfElements(array);
// console.log(x);

console.log('----------------------------------- ex 3 end');

// 4. compute the maximum of the elements of an array and display it in the console

function maxOfArray(arrayElements) {
    var max = arrayElements[0];
    for (var i = 1; i < arrayElements.length; i++) {
        if (arrayElements[i] > max) {
            max = arrayElements[i];
        }
    }
    return max;
}

console.log(maxOfArray([2, 4, 1, 33, 55, 3, 3]));

console.log('----------------------------------- ex 4 end');

// 5. compute how many times a certain element appears in an array

function logOfElement(arrayElements, element) {
    var counter = 0;
    for (var i = 0; i < arrayElements.length; i++) {
        if (element === arrayElements[i]) {
            counter = counter + 1;
        }
    }
    return counter;
}

console.log(logOfElement(["ana", "are", "mere", "are"], "are"));

console.log('----------------------------------- ex 5 end');

// display in console

function pattern1(n) {
    var sir = [];
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            if ((i + j) % 2 === 0) {
                sir = sir + [0];
            } else {
                sir = sir + [1];
            }
        }
        console.log(sir);
        sir = [];
    }
}
pattern1(5);

console.log('----------------------------------- ex extra end');

// display on screen

function pattern(n) {
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            if ((i + j) % 2 === 0) {
                document.write(0)
            } else {
                document.write(1);
            }
        }
        document.write("<br/>");
    }
}

pattern(5);