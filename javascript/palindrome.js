/**
 * Check if a given string is a palindrome 
 * @param {String} str 
 * @returns {Boolean} true or false
 */
function isPalindrome(str){
    let newStr = str.toLowerCase().replace(' ', "");
    let pal =  newStr == newStr.split('').reverse().join('');
    console.log(pal);
    return pal;
}
//Test
isPalindrome("racecar");
isPalindrome("raceCar");