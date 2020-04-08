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
    // let newArr = Array.from(new Set(arr));
    // console.log("New Array is " + newArr);
    return uniqueArr;
}
//Test
duplicateArr([1,3,5,2,3,1,4])