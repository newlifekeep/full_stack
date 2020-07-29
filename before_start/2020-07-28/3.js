/*
  function

  1: arrow function:

  function(param1,param2){
  body
  }

(param1,param2)=>{
body
 }
 1: if have and have only one param, then () can be ignore;
 2: if body have only one pharase ,and it is return , then return can be ignore
 3: about this, bind

2: Spread syntax

 (...) allows an iterable such as an array expression or
  string to be expanded in places where zero or more arguments
   (for function calls) or elements (for array literals) are expected
   , or an object expression to be expanded in places where zero or
   more key-value pairs (for object literals) are expected.

   1: receive all other param in param list
   2:
*/

// function show(a,b){
//   return a+b;
// }


let show = (a,b) => a+b
alert(show(2,3))

let show2 = a => 3*a
//alert(show2(100))
let arr =[9,3,23,22,10]
arr.sort((x1,x2)=>x1-x2)
// alert(arr)
function show3(a,b,c){
  b =b || 5;
  c= c|| 10;
  alert(a+','+b+','+c)
}

function show3_1(a=1,b=2,c=3){
  alert(a+','+b+','+c)
}

function show4(a,b,...args){
//  console.log(a,b,...args)
  console.log(a,b,args)
}
// function show5(a,b,...args,c){   // this is wrong ,args must be the last param
//   console.log(a,b,args,c);
// }

show4(1,2,3,4,5,6,7,8,9)
function show5(){
  let arr=[1,2,3,4]
  let arr2 = [10,20,...arr,100]
  console.log(arr2)
}

show5()
