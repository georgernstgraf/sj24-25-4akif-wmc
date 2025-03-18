class Pizza {
    constructor(name, price, isVeggie) {
        this.name = name;
        this.price = price;
        this.isVeggie = isVeggie;
    }
}

let pizzas = [];
pizzas.push(new Pizza("Salami", 8.5, false));
pizzas.push(new Pizza("Gemuse", 10.9, true));
pizzas.push(new Pizza("Margherita", 9.7, true));
pizzas.push(new Pizza("Funghi", 10.7, true));
pizzas.push(new Pizza("Prosciutto", 6.6, false));
pizzas.push(new Pizza("Quattro Formaggi", 6.7, true));

// compare function mit Name:
function compare_price(pizza_a, pizza_b) {
    return pizza_a.price - pizza_b.price;
}

console.log("Pizzas: ", pizzas);
pizzas.reverse();
console.log("Pizzas reversed: ", pizzas);
// arr.sort((pizza_a, pizza_b) => {
//     return pizza_a.price - pizza_b.price;
// });
pizzas.sort(compare_price);
console.log("Pizzas sorted price: ", pizzas);

pizzas.sort((pizza_a, pizza_b) => pizza_a.name.localeCompare(pizza_b.name));
console.log("Pizzas sorted name: ", pizzas);

let veg = pizzas.filter((pizza) => pizza.isVeggie);
console.log("Veggie Pizzas: ", veg);
