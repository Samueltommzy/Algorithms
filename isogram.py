def checkIsogram(word):
 
  count = 0
  newWord = word.lower()	
#check for an empty string
  if(len(newWord) == 0):
	print "this is an empty string"
  for i in newWord:
    if newWord.count(i) > 1:
      count = count + 1
  if ((count == 0) and (len(newWord) != 0)):
    print "word is isogram"
  if(count > 1):    
    print "word is not isogram"
	
word = raw_input("please enter a word >> :")
#function check
checkIsogram(word)
