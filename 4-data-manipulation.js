// Remove Duplicates 
// there are 3 ways to remove duplicates in an array.

//1. using set.
const nums = [1, 2, 2, 3, 4, 4, 5];

const uniq = [...new Set(nums)];
console.log(uniq);
// o/p  [1, 2, 3, 4, 5]
// if we dont use spread, then it will changed to obj as below.
const uniq = new Set(nums);
console.log(uniq);
//o/p   {1, 2, 3, 4, 5}

//**********************************************
//                   Day 5
//********************************************** */ */
//1. Count frequency of characters in:
//using reduce
let string1 = 'hello';
let arr1 = string1.split("");

let freqctr = arr1.reduce((acc, curr) => {
    if (!acc[curr]) {
        acc[curr] = 1;
    }
    else {
        acc[curr] += 1;
    }
    return acc;
}, {})
console.log(freqctr);
// o/p {h: 1, e: 1, l: 2, o: 1}

// using for loop.

function freqctr2(arr1) {
    let ctrobj = {};
    for (let i = 0; i < arr1.length; i++) {
        let str = arr1[i];
        if (!ctrobj[str]) {
            ctrobj[str] = 1;
        }
        else
            ctrobj[str] += 1;
    }
    return ctrobj;
};
console.log(freqctr2(arr1));
// Count characters ignoring case:,space and numbers

let str1 = "frontend developer";

let freqctr = str1
    .toLowerCase()
    .split('')
    .reduce((acc, curr) => {
        if (/[a-z]/.test(curr)) {
            acc[curr] = (acc[curr] ?? 0) + 1;
        }
        return acc;
    }, {});

console.log(freqctr);

////Return the most frequent character in:

//"success"
let str1 = "success";
let arr1 = str1.trim().toLowerCase().split('');
debugger
let freqctr = arr1.reduce((acc, curr) => {
    if (/[a-z]/.test(curr)) {
        if (!acc[curr]) {
            acc[curr] = 1;
        }
        else {
            acc[curr] += 1;
        }
        if (acc[curr] > acc.maxCount) {
            acc.maxCount = acc[curr];
            acc.freqchar = curr;
        }
    }
    return acc;
}, { maxCount: 0, freqchar: "" })
console.log(freqctr.freqchar);
// s
