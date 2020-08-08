const fruits = () => {
  var fruit = 'apple';
  console.log(fruit);
};

fruits();
console.log(fruit);

const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  // let y = 2; // let o const no se puede reasignar dentro del ámbito
  console.log(x);
  console.log(y);
};

anotherFunction();