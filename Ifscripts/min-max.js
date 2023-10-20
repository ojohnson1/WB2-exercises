let a=43
let b=23
let c=15
let smallest;
let biggest;

if(a > b  && a > c  ){
    biggest=a
}

if(b > a  && b > c ){
    biggest=b
}

if(c > b && c > a ){
    biggest=c
}

if(a < b && a < c ){
    smallest=a
}

if(b < c && b < a){
    smallest=b
}

if(c < a && c < b ){
    smallest=c
}

console.log (smallest,biggest)