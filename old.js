// let stock = {};

// function addItem(itemName, quantity) {
//   if (stock.hasOwnProperty(itemName)) {
//     stock[itemName] += quantity;
//   } else {
//     stock[itemName] = quantity;
    
//   }
// }
// addItem("Teste", 5)
// console.log(stock["Teste"]);

// function removeItem(itemName, quantity) {
//   if (stock.hasOwnProperty(itemName)) {
//     if (stock[itemName] < quantity) {
//       console.log(`Error: Not enough ${itemName} in stock`);
//     } else {
//       stock[itemName] -= quantity;
//     }
//   } else {
//     console.log(`Error: ${itemName} not found in stock`);
//   }
// }

// // removeItem("Teste", 5)

// function checkStock(itemName) {
//   if (stock.hasOwnProperty(itemName)) {
//     console.log(`${itemName} stock: ${stock[itemName]}`);
//   } else {
//     console.log(`Error: ${itemName} not found in stock`);
//   }
// }

// // checkStock("Teste")

// function setStockLimit(itemName, limit) {
//   if (stock.hasOwnProperty(itemName)) {
//     if (stock[itemName] < limit) {
//       console.log(`Warning: ${itemName} stock is low`);
//     }
//   } else {
//     console.log(`Error: ${itemName} not found in stock`);
//   }
// }

// // setStockLimit("Teste", 10)