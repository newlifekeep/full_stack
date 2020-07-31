let a =12;
let [b,c] = [5,8]
const show= ()=>{
  alert(a+b+c)
};

show();
function *demo(){

  alert('ss');
  yield;

  alert("ssdd");

}

demo();


async function getData(){

  try{
      let data1 = await new Promise((resolve,reject)=>{
          alert('get data ...')
      })

  }catch(e){
         alert('data request failure');
      throw new Error('wo cuo le?')
    }

}

getData();
