// Problem 1 : Given a string count the number of words in that string
// (tip:::::: space is also a character)

let str="I am a String tell me what you gonna do";
let count=0;

for(let i=0;i<str.length;i++){
  if(str[i]==" "){
    count++
  }
}
if(str.length>=1){
console.log(count+1);
}if(str.length==0){
  console.log(0);
}