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

/**
 * Given two strings, return true if they are anagrams of one another
 * @param {String} x 
 * @param {String y 
 * @returns {Boolean} true or false
 * @example "Mary" is an anagram of "Army"
 */
function isAnagram(x,y){
    x = x.toLowerCase().split('').sort().join('');
    y = y.toLowerCase().split('').sort().join('');
    console.log(x==y);
    return x ==y;
}

isAnagram("Mary","Army");
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
isPalindrome("racecar");
isPalindrome("raceCar");

function isIsomorphic()