/*
 in es6 about  json simple
*/
let a =12;
let b =20

// let json = {a:a,b:b}
let json = {a,b,show: ()=>a+b}
console.log(json.show());

alert(`woshi ${a},
  my age
   is ${b}`)
