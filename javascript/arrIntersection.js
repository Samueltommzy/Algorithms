/**
 * Find the intersection of two arrays. An intersection would be the common elements 
 * that exists within both arrays.In this case, these elements should be unique!
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function arrIntersection(arr1,arr2){
let newArr1 = Array.from(new Set(arr1));
let newArr2 = Array.from(new Set(arr2));
let uniqueIntersection = [];

for(let x of newArr1){
    if(newArr2.indexOf(x) !== -1){
        uniqueIntersection.push(x);
    }
}
console.log("The unique common values are " + uniqueIntersection);
}

//Test
arrIntersection([2,2,4,1],[1,2,0,2]);
