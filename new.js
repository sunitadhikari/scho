
async function exapmle(){
  const name  = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  const data = await name.();
  console.log(data);
}
exapmle();
fzsd