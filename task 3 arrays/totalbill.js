const availableFoods = [
    {id: "qwe234dfh", name: "Burger", image: "🍔🍔", price: 234},
    {id: "qwe2356dxh", name: "Pizza", image: "🍕🍕", price: 400},
    {id: "qwe2456yh", name: "Meat", image: "🍖🍖", price: 500},
    {id: "qwe2785yh", name: "Chicken", image: "🍗🍗", price: 1200},
];

let result = availableFoods
    .filter(food => food.price > 450) // Correctly filter foods with price greater than 450
    .reduce((total, food) => total + food.price, 0); // Correctly sum the prices of the filtered foods

console.log(result); // Output the total sum