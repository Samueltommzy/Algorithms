var isIsogram = (word) =>{
//an empty object to  store letters in the word and their count
var letterStore = {} 
//check if word is null and return true
var newWord = word.toLowerCase()
if(word.length === 0){
  console.log("This is an empty string")
}
var count = 0
//convert the input string to lower case
for(var i =0;i< newWord.length;i++){
  var letterInWord = newWord.charAt(i)
  if(letterStore[letterInWord]){
      letterStore[letterInWord] += letterStore[letterInWord];}
      else{
      letterStore[letterInWord] =1 
  }
}
if(letterStore[letterInWord] > 1){
  	console.log( newWord + " is not an isogram")
  }
else{
  console.log( newWord + " is an isogram")
}
}
//function test
isIsogram("asaaa")
