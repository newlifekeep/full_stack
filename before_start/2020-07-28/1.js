/*
  part1: var let const

  1:block scope
  2: global scope  easily lead to varibale name conflict
*/

var a =10;
var a =100;
//alert(a);

let b= 100;
b=101;
//alert(b);

const c= 200;
// c=201;
console.log(c);
if(3<5){
  let a1=12
}
console.log(a1) // a1 just include the block which tha a1 was definition ;
 
