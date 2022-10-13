 // Problem 2 : Given an array of string count the overall total number of characters

let arr=["MERA","TERA","ISKA","USKA"];
let char=0;


for(let i=0;i<arr.length;i++){
   char+=arr[i].length;
}

console.log(char);