// Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
// Example:
// Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
// Output: 13 (distinct elements 4, 7, 2 )
// Use an array as a method.
// Initialize sum = 0. Compare each element of set one with the second set and if element is not present then add that element to sum. Then do the vice versa to add elements from the second set.

var set1 = [3, 1, 7, 9];
var set2 = [2, 4, 1, 9, 3];
var sum = 0;

var arr3 = set1.filter(function(obj){
    return set2.indexOf(obj) == -1;
})
var arr4 = set2.filter(function(obj){
    return set1.indexOf(obj) == -1;
})


// for (var i = 0; i < set1.length; i++) {
//     for (var j = 0; j < set2.length; j++) {
//         if (set1[i] == set2[j]) {
//             break;
//         }
//         else if (j == set2.length-1) {
//             sum += set1[i];
//         }
//     }
// }

// for (var i = 0; i < set2.length; i++) {
//     for (var j = 0; j < set1.length; j++) {
//         if (set2[i] == set1[j]) {
//             break;
//         }
//         else if (j == set1.length-1) {
//             sum += set2[i];
//         }
//     }
// }

console.log();