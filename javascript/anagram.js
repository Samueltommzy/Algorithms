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
//Test
isAnagram("Mary","Army");