/**
 * Being told that an unsorted array contains (n - 1) of n 
consecutive numbers (where the bounds are defined), find the missing number in O(n) time
 * @param {Array<Number>} arr 
 */
function missingArr(arr){
    let expectedSum = 0;
    let actualSum = 0;
    let arrayMax = Math.max(...arr);
    for(let i =1;i<=arrayMax;i++){
        expectedSum+= i;
    }
    for(let j = 0;j<arr.length;j++){
        actualSum+=arr[j];
    }
    console.log("Expected Sum is " + expectedSum);
    console.log("Actual Sum is " + actualSum);
    console.log("missing number is " + (expectedSum-actualSum));
    return expectedSum-actualSum;
}
//Test
missingArr([1,2,3,4,6,7])