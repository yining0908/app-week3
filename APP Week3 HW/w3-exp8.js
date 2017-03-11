let promise=new  Promise((resolve,reject)=>{resolve();});
//let promise=new  Promise((resolve,reject)=>{reject();});

promise
  .then(()=>console.log('work is finished'))
  .then(()=>console.log('again finished'))
  .catch(()=>console.log('uh oh'))

  // work is finished , again finished will appear