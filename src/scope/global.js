// Scope Global
var hello = 'hello'; // var permite reasignar el valor más adelante
let world = 'hello world'; // let NO permite reasignar el valor
const helloWorld = 'Hello World!' // const NO permite resignar el valor

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}

anotherFunction();

// MALAS PRÁCTICAS
const helloWorld = () => {
  globalVar = "I'm global"
}

helloWorld();
console.log(globalVar);

const anotherFunction = () => {
  var localVar = globalVar = "I'm Global";
}

anotherFunction();
console.log(globalVar);