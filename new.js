// //
//   async function example() {
   
//     const response = aw
   

//   }
async function exapmle(){

  const name  = await fetch('https://www.youtube.com/watch?v=3MqyDWDpZoI');
  const data = await name.youtube();
  console.log(data);
}