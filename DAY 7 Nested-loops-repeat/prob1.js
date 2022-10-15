// Problem 1: Print the Calendar date in the below format

// 1-1
// 2-1
// 3-1
// .
// .
// .
// .
// .
// 31-1
// .
// .
// .
// .
// .
// 31-12
let days;
for(let month=1;month<=12;month++){
  if(month==2){
    days=28;
  }else if(month==4|| month==6||month==9||month==11){
    days=30;
  }else{
    days=31;
  }
  for(let d=1;d<=days;d++){
    console.log(d+"-"+month);
  }
}