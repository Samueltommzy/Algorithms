 
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
//Test
productExceptSef([2,2,4,1]);

 


