/*
Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

The first mission: Traversing arr, find the shortest string length.

The second mission: Traversing arr again, intercept all strings to the shortest string 
length(Start from index0). you can use one of slice() substring() or substr() do it. 
return the result after finished the work.

for example:

cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

*/

// My Solution:

function cutIt(arr) {
    // Find the shortest string length
    let minLength = Math.min(...arr.map(str => str.length));

    // Intersect each string to the shortest length
    let result = arr.map(str => str.slice(0, minLength));

    return result;
}

// Sloution 2:

const cutIt = arr =>
  arr.map(val => val.slice(0, Math.min(...arr.map(val => val.length))));

// Solution 3:

const cutIt = arr => arr.map(element => element.slice(0,Math.min(...arr.map(element => element.length))))