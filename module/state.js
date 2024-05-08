const coffeeStock = {
    arabica : 100,
    robusta : 150,
    liberica: 200
}

const isCoffeeMachineWell = true;
const isCoffeeReady = true;

// module.exports = {
//     coffeeStock,
//     isCoffeeReady,
//     isCoffeeMachineWell,
// };
// ! ES6
// export default coffeeStock;

export {
    coffeeStock,
    isCoffeeReady,
    isCoffeeMachineWell,
};