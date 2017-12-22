var printTriangle = (n)=>{
var i,x,j;
for(i = 1;i<=n;i++){
    for(j=1;j<i;j++){
        x = x + ('*');
    }
    console.log(x);
    x ='';
}
}
printTriangle(6);