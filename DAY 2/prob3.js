// Problem 3: Given 2 numbers a and b print which is greater or "both equal".


let a=30;
let b=20;
let print="";

if(a>b){
  print+="a is greater than b"
}else if(b>a){
  print+="b is greater than a"
}else if(a==b){
  print+="both equal"
}
console.log(print);