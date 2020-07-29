/* about oop
*/
function Person(name,age){
  this.name = name;
  this.age =age;
}

 Person.prototype.showName = function (){
   alert(`myname is ${this.name}`)
 }


 let p = new Person("zgding",42);

 p.showName()

 function Worker(name,age,job){
   Person.call(this,name,age);
   this.job =job
 }
 Worker.prototype = new Person();
 Worker.prototype.constructor = Worker;

 let worker1 = new Worker('zgding',41,'it')

worker1.showName()
class Person2{
  constructor(name,age){
    this.name=name;
    this.age =age;
  }
  showName(){
    alert(`wo jiao ${this.name}`)
  }
}
let p2 = new Person2('dzg',42);
// p2.showName()
class Worker2 extends Person2{
  constructor(name,age,job){
    super(name,age);
    this.job= job;
  }
  showJob(){
    alert(`my job is ${this.job}`)
  }
}
let w2 = new Worker2('lena',39,'teacher')
w2.showJob()
w2.showName()
