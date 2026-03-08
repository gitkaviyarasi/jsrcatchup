const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);
// to retuern the last value in array
function getLastValue(arr) {
    lastIndex = arr.length - 1;
    console.log(arr[lastIndex]);
}

getLastValue([1, 20, 22, 24, 5]);

// swap the first and the last values of an array:

function arraySwap(arr) {
    let first = arr[0];
    let last = arr[arr.length - 1];
    arr[0] = last;
    console.log(first);
    console.log(arr);
    arr[arr.length - 1] = first;
    console.log(arr);
}

arraySwap([1, 20, 22, 24, 5]);
arraySwap(['good', 'hi', 'hello']);
//['hello', 'hi', 'good']

//11d . loop that counts from 0 ,10 up by 2
function countby2() {
    for (let i = 0; i <= 10; i + 2) {
        console.log(i)
    }
    return
}

countby2();

//using while loop
function count() {
    let i = 0;
    while (i <= 10) {
        console.log(i);
        i = i + 2;

    }


}
count();


// llok up for a word and then return the idex of the string or -1 if the srting is not in the array.
function lookup(arr, lookup) {

    console.log(arr.indexOf(lookup))
}

function removeEgg(food) {
    for (let i = 0; i < food.length; i++) {

        if (food[i] === 'Egg') {
            food.delete[i];
        }
    }
    console.log(food);
}