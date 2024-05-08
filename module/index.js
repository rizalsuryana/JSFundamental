// const {coffeeStock, isCoffeeMachineWell, isCoffeeReady} = require('./state');

// ! ES6
import {coffeeStock, isCoffeeReady, isCoffeeMachineWell} from "./state.js";
// console.log(coffeeStock);

const makeCoffee = (type, miligrams) => {
    if(coffeeStock[type] >= miligrams) {
        console.log(`Kopi berhasil dibuat`);
    }
    else {
        console.log(`Biji habis, biji kopi abis ngab !!`);
    }
}

makeCoffee('robusta', 100);

console.log(coffeeStock, isCoffeeMachineWell, isCoffeeReady);