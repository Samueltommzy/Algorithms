function digital_root(n) {
  //validate input is a number
  if(isNaN(n)){
    return 'Input has to be a number';
  }
  //validate input is a non-negative integer
  if(n<0){
    return 'input has to be a non-negative integer'
  }

  let nToArr = n.toString().split('');
  //If it is a single digit,return the digit
  if(nToArr.length == 1){
    return n;
  }
  let sum = nToArr.reduce((prev,curr)=>Number(prev)+Number(curr));
  //recursively call the function until a single digit is produced
  if(sum.toString().split('').length >1){
    sum = digital_root(sum);
  }
  return sum;
}