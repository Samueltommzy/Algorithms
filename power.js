var power = (x,y)=>{
if(y == 0){   
    return 1
}
else{
    return x * power(x, y-1);
}
}
/ffunction test
console.log(power(2,4));