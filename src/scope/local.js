// Scope Local
const helloWorld = () => {
  const hello = 'hello world';
  console.log(hello);
};

helloWorld();
console.log(hello);

var scope = "I'm Global";

const functionScope = () => {
  var scope = "I'm just a local";
  const func = () =>{
    return scope
  }
  console.log(func()); // llamamos a la funcion que retorna la var scope local
};

functionScope();
console.log(scope); // Este toma la var global
