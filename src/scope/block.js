const fruits = () => {
  if (true) {
    var fruits1 = 'apple'; // var funciona dentro de toda la funcion
    let fruits2 = 'banana'; // let y const no salen del bloque {}
    const fruits3 = 'kiwi';
    console.log(fruits2);
    console.log(fruits3);
  }
  console.log(fruits1); // puede leer var pero no puede let y const
}

fruits();

let x = 1;
{
  let x = 2;
  console.log(x); // dentro del bloque
}
console.log(x); // en scope global

var x = 1;
{
  var x = 2;
  console.log(x); 
}
console.log(x); // x=1 del var en el scope global ha sido reasignado dentro del bloque con otro var x=2.

const anotherFunction = () => {
  for (var i = 0; i < 10; i++) { // podemos cambiar var por let para que no de resultado 10 veces 10
    setTimeout(() => {
      console.log(i);
    }, 1000)   
  }
};

anotherFunction();

// For con LET
const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000)   
  }
};
anotherFunction();
