
async function exapmle(){

  const name  = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  const data = await name.youtube();
  console.log(data);
}