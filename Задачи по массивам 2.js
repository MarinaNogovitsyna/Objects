// Задача 1
function arrayWithValues (val, number){
    let arr = [];
    let i = 0;

    do {
        arr.push(val);
        i++;
    }
    while (i<number);
    return arr;
}
console.log( arrayWithValues ('a', 3) );
console.log('=======================================');


// Задача 2
function revertsInputArray (arr){
    return arr.reverse();
};

console.log( revertsInputArray ([1, 2, 3]) );
console.log('=======================================');

//Задача 3
function clearsArray(arr){
    return arr.filter(item => item !== undefined && item !== null && item !== 0 &&
        item !== '' && item !== false);
};

console.log( clearsArray ([1, null, 2, '', undefined, false, 0, 2]) )
console.log('=======================================');

// Задача 4
function returnsAnObject(arr){
    return Object.fromEntries(arr);
};

let arr4 = [['a', 1], ['b', 2]];
console.log( returnsAnObject(arr4) );
console.log('=======================================');


// Задача 5
function arrayWithoutListedValues(arr){
    return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
};

let arr5 = [1, 2, 3, 1, 2]
console.log( arrayWithoutListedValues(arr5) )
console.log('=======================================');


// Задача 6
function duplicateFreeArray(arr){
    let set = new Set(arr);
    let arr1 = [];
    set.forEach((val, values, set) => {arr1.push(val)});
    return arr1;
};

let arr6 = [1, 2, 3, 1, 2];
console.log( duplicateFreeArray(arr6) );
console.log('=======================================');


// Задача 7
function areIdentical(arr1, arr2){
    if (arr1.join() === arr2.join()) return true;
    return false;
};

let arr7 = [1, 2, 3];
let arr77 = [1, 2, 3];
console.log( areIdentical(arr7, arr77) );
console.log('=======================================');


// Задача 8
function simpleArray(arr) {
    let arr1 = arr.flat(Infinity);
    return arr1;
}

let arr8 = [1, 2, [3, 4, [5]]];
console.log( simpleArray(arr8) );
console.log('=======================================');


// Задача 9
function newArrayWithArray (arr, n) {
    let arr1= [];
    let arr2 = [];

    while (arr.length) {
        arr1 = arr.splice(0, n);
        arr2.push(arr1);
    }
    return arr2;
}

console.log( newArrayWithArray ([1, 2, 3, 4, 5], 2) );
console.log('=======================================');


// Задача 10
function uniqueValues(arr) {
    let arr1 = [];

    for (let i = 0; i < arr[0].length; i++) {
        arr1.push(arr[0][i]);
    }
    for (let i = 0; i < arr1.length; i++) {

        for (let ii = 0; ii < arr.length; ii++) {

            if (!arr[ii].includes(arr1[i])) {
                arr1.splice(i, 1);
            }
        }
    }
    return arr1;
}

let arr10 = [[1, 2], [2, 3]];
console.log( uniqueValues(arr10) );