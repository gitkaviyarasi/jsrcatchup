// const nums = [5, 12, 8, 130, 44];
// const minMax = nums.reduce((acc, curr) => {
//     acc.average = acc.average + curr;
//     if (acc.max < curr) {
//         acc.max = curr;
//     }
//     else if (acc.min > curr) {
//         acc.min = curr
//     }
//     return acc
// }, { min: nums[0], max: nums[0], average: nums[0] })
// console.log(minMax);

const evenOdd = nums.reduce((acc, curr) => {
    if (curr % 2 === 0) {
        acc.even.push(curr)
    }
    else {
        acc.odd.push(curr)
    }
    return acc
}
    , { even: [], odd: [] });
console.log(evenOdd);

// 

const users = [
    { name: "A", age: 20 },
    { name: "B", age: 25 },
    { name: "C", age: 20 }
];

function groupByAge() {
    let groupedByAge = {};

    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let age = user.age;
        let name = user.name;

        if (!groupedByAge[age]) {
            groupedByAge[age] = { count: 1, users: [name] };
        } else {
            groupedByAge[age].count++;
            groupedByAge[age].users.push(name);
        }
    }

    return groupedByAge;
}

console.log(groupByAge());
// o/p {
// 20: { count: 2, users: ["A", "C"] },
// 25: { count: 1, users: ["B"] }
//}

// using reduce 
let grp = users.reduce((acc, curr) => {

    if (!acc[curr.age]) {
        acc[curr.age] = { count: 0 };
    }

    acc[curr.age].count++;

    return acc;

}, {});
// {
//   20: { count: 2 },
//   25: { count: 1 }
// }

const nums = [1, 2, 3, 4, 5, 6];
const evenOdd = nums.reduce((acc, curr) => {
    if (curr % 2 === 0) {
        acc.even = acc.even + 1;
    }
    else {
        acc.odd = acc.odd + 1;
    }
    return acc
}, { even: 0, odd: 0 })
console.log(evenOdd);
//{even: 3, odd: 3}

// *************************************************************************************
//                 Arrays Day 3
//***************************************************************************************
const numbers = [5, 12, 8, 130, 44];

// Find first number greater than 10

const firstnum = numbers.find(n => n > 10);
console.log(firstnum);

// Filter all numbers greater than 10
const allNums = numbers.filter(n => n > 10);
console.log(allNums);
//(3) [12, 130, 44]
// Find first number less than 0
const lessThanZero = numbers.find(n => n < 0)
console.log(lessThanZero);
// undefined
// What does it return if nothing matches?

//Check if any score is below 65
const below = scores.some(n => n < 65);
console.log(below);
//Check if all scores are above 50
const allabove50 = scores.every(n => n > 50);
console.log(allabove50);
//Check if all scores are above 75
const allabove75 = scores.every(n => n > 75);
console.log(allabove75);

const users = [
    { name: "John", age: 25, active: true },
    { name: "Jane", age: 30, active: false },
    { name: "Mark", age: 20, active: true }
];

// Get names of active users
const activeUser = users.filter(user => user.active)
    .map(user => user.name)
console.log(activeUser);
// 2) [{…}, {…}]
// 0
// : 
// {name: 'John'}
// 1
// : 
// {name: 'Mark'}

// Get names of users older than 22
const olderUsers = users.filter(user => user.age > 22)
    .map(user => user.name)
console.log(olderUsers);
//0
// : 
// {user: 'John'}
// 1
// : 
// {user: 'Jane'}
// Get names of active users older than 22
// const olderActiveUsers= users.filter(user=>user.age>22)
//                      .filter(user=>user.active)
//                   .map(user => user.name)

.filter(user => user.age > 22 && user.active) // clean logic
console.log(olderActiveUsers);

// descending order 
const dscOrder = nums.sort((a, b) => b - a);
console.log(dscOrder);

// this one mutates, so use like this 
const ascOrder = [...nums].sort((a, b) => a - b);
const dscOrder = [...nums].sort((a, b) => b - a);
// reduce 
// Get total age using reduce.
const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Mark", age: 20 }
];

let totalAge = users.reduce((acc, curr) => {
    acc = curr.age + acc;
    return acc;
}, 0)
console.log(totalAge);
//75

// 2.  Count how many users are active.
const users = [
    { name: "A", active: true },
    { name: "B", active: false },
    { name: "C", active: true }
];

const count = users.reduce((acc, curr) => {
    if (curr.active) {
        acc = acc + 1;
    }
    return acc;
}, 0)
console.log(count);

//3  Group by Active Status
const activeInactive = users.reduce((acc, curr) => {
    if (curr.active) {
        acc.active.push(curr.name);
    }
    else {
        acc.inactive.push(curr.name);
    }
    return acc
}, { active: [], inactive: [] })
console.log(activeInactive);

// {
//   active: ["A", "C"],
//   inactive: ["B"]
// }
//**********************
//  */
const grouped = people.reduce((acc, curr) => {
    if (!acc[curr.age]) {
        acc[curr.age] = [];
    }

    acc[curr.age].push(curr.name);
    return acc;
}, {});
//
// { 
//   25: ["John", "Mark"],
//   30: ["Jane"]
// }
const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Mark", age: 25 }
];
const group = people.reduce((acc, curr) => {

    if (!acc[curr.age]) {
        acc[curr.age] = []
    }
    acc[curr.age].push(curr)
    return acc;
}, {})
console.log(group);

// {
//   25: [
//     { name: "John", age: 25 },
//     { name: "Mark", age: 25 }
//   ],
//   30: [
//     { name: "Jane", age: 30 }
//   ]
// }

//*************************************************************************** */
const orders = [
    { id: 1, category: "electronics", amount: 500 },
    { id: 2, category: "clothing", amount: 80 },
    { id: 3, category: "electronics", amount: 1200 },
    { id: 4, category: "clothing", amount: 150 }
];

// {
//   electronics: 1700,
//   clothing: 230
// }

const grpByCat = orders.reduce((acc, curr) => {
    if (!acc[curr.category]) {
        acc[curr.category] = curr.amount;
    }
    else {
        acc[curr.category] = acc[curr.category] + curr.amount
    }
    return acc
}, {});
console.log(grpByCat);

// {
//   electronics: {
//     totalAmount: 1700,
//     count: 2
//   },
//   clothing: {
//     totalAmount: 230,
//     count: 2
//   }
// }

const grpCount = orders.reduce((acc, curr) => {
    if (!acc[curr.category]) {
        acc[curr.category] = { totalamount: 0, count: 0 }
    }
    acc[curr.category].totalamount = curr.amount + acc[curr.category].totalamount;
    acc[curr.category].count = acc[curr.category].count + 1
    return acc
}, {})
console.log(grpCount);

//