const buildCount = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++); // sumamos a count pero no la primera vez
  };
  return displayCount;
};

const myCount = buildCount(1);
myCount(); // undefined + 1
myCount(); // 1 + 1 = 2
myCount(); // 2 + 1 = 3

const myOtherCount = buildCount(10);
myOtherCount(); // undefined + 10 = 10
myOtherCount();
myOtherCount();
myCount(); // Recuerda el valor de count = 3 y suma 1 = 4
myOtherCount(); // Recuerda el valor de count = 12 y suma 1 = 13

const helloworld = () => {globalvar = "global";} debugger
helloworld();