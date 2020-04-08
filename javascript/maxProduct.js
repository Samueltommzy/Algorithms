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
function sortArr(a,b){
    return a-b;
}
//Test
maxProd([-10, 7, 29, 30, 5, -10, -70,-90,100]);