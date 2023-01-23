// //
//   async function example() {
   
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//    const data= await response.json();
//    console.log(data);
   

//     // const data = await respo
//     // co
//   }
async function exapmle(){

  const name  = await fetch('https://www.youtube.com/watch?v=3MqyDWDpZoI');
  const data = await name.youtube();
  console.log(data);
}