// //
//   async function example() {
   
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//    c
   

//   }
async function exapmle(){

  const name  = await fetch('https://www.youtube.com/watch?v=3MqyDWDpZoI');
  const data = await name.youtube();
  console.log(data);
}