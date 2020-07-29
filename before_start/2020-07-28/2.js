// let [a,b,c]=[1,2,3];
// alert(a+','+b+','+c);
// let {a1,b1,c1}={a1:333,b1:'hello',c1:{'a':12,'c':900}}
// alert(a1+","+b1+","+c1);
/*
The destructuring assignment syntax is a JavaScript expression
 that makes it possible to unpack values from arrays, or properties from objects, into distinct variables

 1: left and right must keep same structure and right must be a array or object
 2:  destructuring declaration and assigment must  be finished at the same time 
*/
// let [n1,{a,b,c},n2]=[12,{a:{m1:10,m2:100},b:333,c:'hello'},100]
// console.log(n1,a,b,c,n2);
let [a,b,c]= [1,2,3];
let {a1,b1,c1}= {a1:'hello',b1:23,c1:[1,2,3,4]}

// let [a2,b2]={1,2}   -- right must be a array or object
console.log(b2);
let {d1,d2};
{d1,d2}={d1:33,d2:'eee'}
alert(d1+','+d2)  // Uncaught SyntaxError: Missing initializer in destructuring declaration
