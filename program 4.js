// program to merge and remove duplicate value from an array
function Merge(arr1, arr2) {
    // merge two arrays
    let arr = [arr1, arr2];
    // removing duplicate
    let duplicate = [new Set(arr)];
    console.log(duplicate);
}
const array1 = [1, 2, 3];
const array2 = [2, 3, 5]
// calling the function
Merge(array1, array2);
