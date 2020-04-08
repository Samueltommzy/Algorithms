/**
 * Given an array of integers,find the largest difference between two elements 
 * such that the element of lesser value must come before the greater element
 * @param {Array<Number>} arr The array
 */

function findLargestDiff(arr) {
    if (arr.length <=1) return -1;
    let currentMin = arr[0];
    let currentMaxDiff = 0;

    for(let i =1;i <=arr.length;i++){
        if(arr[i]>currentMin && ((arr[i] - currentMin) > currentMaxDiff )){
            currentMaxDiff = arr[i] - currentMin;
        }
        else if (arr[i] <= currentMin){
            currentMin = arr[i];
        }
    }

    if(currentMaxDiff <= 0) return -1;
    console.log("max difference is " + currentMaxDiff);
    return currentMaxDiff;
}
//Test
findLargestDiff([7, 8, 4, 9, 9, 8, 3, 1, 10]);