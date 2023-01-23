// //
//   async function example() {
   
//     const r

//   }
async function exapmle(){

  const name  = await fetch('https://www.youtube.com/watch?v=3MqyDWDpZoI');
  const data = await name.youtube();
  console.log(data);
}