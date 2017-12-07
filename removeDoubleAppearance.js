var removeDuplicates = (str) =>{
var strToLower = str.toLowerCase();
var charStore = {};
var sortedString = strToLower.split('').sort().join('');//sorting of string
var newString = sortedString.replace(/[^A-Za-z0-9]/g, '');//remove non alphanumeric characters from the sorted string
var strToReturn = "";
for(var i =0;i < newString.length;i++){
if(!(newString[i] in charStore)){     
strToReturn += newString[i];
charStore[newString[i]] = true;
}
} 
console.log(strToReturn)
return strToReturn
}
//function test
removeDuplicates("SAm&^muuel_")
