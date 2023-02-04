// Задача 1
function isSimpleObject (obj) {

    if (typeof obj == 'object' && obj !== null &&!Array.isArray(obj))
        return true;

    return false;
}
let object = {a:1, b: 'cat'};
console.log( isSimpleObject (object) );

let arr = [1, 2, 3];
console.log( isSimpleObject (arr) );
console.log('=============================================');


// Задача 2
function objectToArray(obj){
   return  Object.entries(obj);
}

let object2 = {a:1, b:2};
console.log( objectToArray(object2) );
console.log('=============================================');


// Задача 3
function withoutProperties (obj, not) {

    for (let key in obj) {

        if (key == not) {
            delete obj[key];
        }
    }
    return obj;
}

let object3 = {a:1, b:2};
console.log( withoutProperties (object3, 'b') )
console.log('=============================================');


// Задача 4

function isEmpty (obj) {
    if (Object.keys(obj).length === 0)
        return true;

    for (let key in obj){

        if (obj[key] != undefined || obj[key] != null)
            return false;
    }
    return true;
}

let object4 = {};
console.log( isEmpty (object4) );
console.log('=============================================');

// Задача 5

function isEqual (obj1, obj2){

    if (JSON.stringify(obj1) === JSON.stringify(obj2))
        return true;

    else return false;
};

let object5 = {a:1, b:2};
let object55 = {a:1, b:2};
console.log( isEqual (object5, object55) );
console.log('=============================================');


// Задача 6
function methodSplice (obj, a, b) {
    let arr = [];

    for (let key in obj) {
        for (let key2 in obj[key]) {

            for (let i = 0; i < obj[key][key2].length; i++) {
                arr.push(obj[key][key2][a]);
                arr.push(obj[key][key2][b]);
                return arr;
            }
        }
    }
}
let object6 = { a: { b: [1, 2, 3] } };
console.log( methodSplice (object6, 1, 2) );
console.log('=============================================');


// Задача 7
function checkEmpty (obj){
    let result;

    if (JSON.stringify(obj) === '{}') {
        result = true;
    }
    for (let key in obj) {
        if (obj[key] === undefined || obj[key] === null || isNaN(obj[key]) ||
            obj[key].length === 0 || obj[key] === [] || obj[key] === {}) {
            result = true;
        } else {result = false}
    }

    return result;
}


let object7 = {a:{}};
console.log( checkEmpty (object7) );
console.log('=============================================');

// Задача 8
function isEqual(obj1, obj2) {

    if (JSON.stringify(obj1) === JSON.stringify(obj2))
    return true;

else return false;
}

let object8 = { a: 1, b: { c: 2 } };
let object88 = { a: 1, b: { c: 2 } };
console.log( isEqual(object8, object88) );
console.log('=============================================');


// Задача 9
function intersectionsOfObjects (obj1, obj2) {
    let keyInObj1 = Object.keys(obj1);
    let keyInObj2 = Object.keys(obj2);
    let key;

    for (let i = 0; i < keyInObj1.length; i++) {

        for (let ii = 0; ii < keyInObj2.length; ii++) {

            if (keyInObj1[i] === keyInObj2[ii] && obj1[keyInObj1[i]] === obj2[keyInObj2[ii]]){
                key = keyInObj1[i];
            }
        }
    }
    for (let keyDel in obj1) {
        if (keyDel !== key) {
            delete obj1[keyDel];
        }
    }
    return obj1;
}

let object9 = { a: 1, b: 2 };
let object99 =  {  c: 1, b: 2};
console.log( intersectionsOfObjects (object9, object99) );
console.log('=============================================');



// Задача 10
function intersectionDeep(obj1, obj2) {
    let keyInObj1 = Object.keys(obj1);
    let keyInObj2 = Object.keys(obj2);
    let key;

    for (let i = 0; i < keyInObj1.length; i++) {

        for (let ii = 0; ii < keyInObj2.length; ii++) {

            if (keyInObj1[i] === keyInObj2[ii] &&
                JSON.stringify(obj1[keyInObj1[i]]) === JSON.stringify(obj2[keyInObj2[ii]])){
                key = keyInObj1[i];
            }
        }
    }
    for (let keyDel in obj1) {

        if (keyDel !== key) {
            delete obj1[keyDel];
        }
    }
    return obj1;
}
let object10 = { c: 1, b: { c: 3 } };
let object1010 = { a: 1, b: { c: 3 } };
console.log( intersectionDeep(object10, object1010) )