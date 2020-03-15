let a=5672;
let rev=0;
let r;
while(a!=0){
    r=a%10;
    rev=rev*10+r;
    a=a/10;
}
console.log(rev);