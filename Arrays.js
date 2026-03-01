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