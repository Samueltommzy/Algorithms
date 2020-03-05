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
missingArr([1,2,3,4,6,7])

/**
 * Remove duplicate from an array and return only array of unique elements
 * @param {} arr 
 */
function duplicateArr(arr){
    let hashmap = {};
    let uniqueArr = [];
    for(let i =0;i<arr.length;i++){
        if(!hashmap.hasOwnProperty(arr[i])){
            hashmap[arr[i]] = 1;
            uniqueArr.push(arr[i]);
        }
    }
    console.log("New array is " + uniqueArr);
    let newArr = Array.from(new Set(arr));
    console.log("New Array is " + newArr);
    return newArr;

}


duplicateArr([1,3,5,2,3,1,4])


function sortArr(a,b){
    return a-b;
}

/**
 * Given an array of integers,find the largest product yielded from three integers
 * @param {Array<Number>} arr 
 */
function maxProd(arr){
    let sortedArr = arr.sort(sortArr);
    let product1 = 1;
    //get product of last three item
    let lastIndex = sortedArr.length -1;
    for(let i = lastIndex;i>lastIndex-3;i--){
        product1*= sortedArr[i];
    }

    let leastItem = sortedArr[0];
    let secondLeastItem =sortedArr[1];

    let secondProduct= leastItem * secondLeastItem * sortedArr[lastIndex];
    let finalResult = product1 > secondProduct?product1:secondProduct;
    
    console.log(finalResult);
    return finalResult;
}
maxProd([-10, 7, 29, 30, 5, -10, -70,-90,100]);

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

 findLargestDiff([7, 8, 4, 9, 9, 8, 3, 1, 10]);
 
 /**
  * Given an array of integers, return an output array such that output[i] is equal to the product of all
  * the elements in the array other than itself.(Solve this in O(n) without division)
  * @param {Array} arr The array
  */
  function productExceptSef(arr){
    let finalOutput = [];
    let product = 1; 
    for(let i = 0;i<arr.length;i++){
     finalOutput.push(product);
     product = product * arr[i];
    }
    console.log("final output : "  + finalOutput);
    return finalOutput;
  }

  productExceptSef([2,2,4,1]);

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

  arrIntersection([2,2,4,1],[1,2,0,2]);



