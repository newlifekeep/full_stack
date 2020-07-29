/*
array/json
map: one vs one
filter:
forEach
reduce: input many output  one
*/
let arr=[12,23,34,55];
let arr2 = arr.map(x=>x>30)
let arr3 = arr.filter(x => x%2 ==0)
let sum=0
let arr4= arr.forEach(item =>{
  sum = sum+item
  })
  alert(sum)
let avgValue = arr.reduce((x1,x2)=>x1+x2,0)/arr.length
alert(avgValue)

let avg2=  arr.reduce((temp=0,item,index)=>{
  if(index == arr.length-1){
    return (temp+item)/arr.length
  }else{
    return temp+item
  }
})

alert(avg2)

console.log(arr3)
console.log(arr)
