a = 2;
var a; // Esta línea pasa al principio automáticamente
console.log(a);

// ---------------

console.log(a); // Undefined ya que el hoisting no se realiza en las inicializaciones, solamente en las declaraciones.
var a = 2;

// ---------------

nameOfDog('Elmo');
// La funcion pasa al inicio gracias al hoisting
function nameOfDog(name) {
  console.log(name);
}
