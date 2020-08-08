// Hucha

const moneyBox = (coins)/* le pasamos nuestras monedas */ => {
  var saveCoins = 0; // Iniciamos con 0
  saveCoins += coins; // Operación de asignación de adición
  console.log(`moneyBox: €${saveCoins}`);
};

moneyBox(5);
moneyBox(10);

// Hucha con estructura de closure

const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) =>{
    saveCoins += coins;
    console.log(`MoneyBox; €${saveCoins}`);
  }
  return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);