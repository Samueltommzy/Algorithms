/**
 * Given a string, reverse each word in the sentence
 * @param {String} str 
 * @returns {String} a reversed string
 */
function reverseString(str){
    let finalStr =  (str.split(' ').map((x)=>x.split('').reverse().join(''))).join(' ');
    console.log(finalStr);
    return finalStr;
}

reverseString("Welcome to this Javascript Guide!");