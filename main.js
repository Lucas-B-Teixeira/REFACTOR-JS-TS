"use strict";
exports.__esModule = true;
var stock = [];
var itemStock = /** @class */ (function () {
    function itemStock(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    return itemStock;
}());
function addItem(itemName, quantity) {
    var newItem = new itemStock(itemName, quantity);
    if (stock.length > 0) {
        for (var i = 0; i < stock.length; i++) {
            if (stock[i].hasOwnProperty('name')) {
                if (stock[i].name == itemName) {
                    stock[i].quantity += quantity;
                }
                else {
                    stock.push(newItem);
                }
            }
        }
    }
    else {
        stock.push(newItem);
    }
}
addItem("Teste", 5);
console.log(stock);
addItem("Teste", 8);
console.log(stock);
function removeItem(itemName, quantity) {
    if (stock.length > 0) {
        for (var i = 0; i < stock.length; i++) {
            if (stock[i].hasOwnProperty('name')) {
                if (stock[i].quantity < quantity) {
                    console.log("Error: Not enough ".concat(itemName, " in stock"));
                }
                else {
                    stock[i].quantity -= quantity;
                }
            }
        }
    }
    else {
        console.log("Error: ".concat(itemName, " not found in stock"));
    }
}
removeItem("Teste", 5);
console.log(stock);
function checkStock(itemName) {
    if (stock.length > 0) {
        for (var i = 0; i < stock.length; i++) {
            if (stock[i].hasOwnProperty('name')) {
                if (stock[i].name == itemName) {
                    console.log(stock[i]);
                }
                else {
                    console.log("Error: ".concat(itemName, " not found in stock"));
                }
            }
        }
    }
    else {
        console.log("Error: ".concat(itemName, " not found in stock"));
    }
}
checkStock("Teste");
function setStockLimit(itemName, limit) {
    if (stock.length > 0) {
        for (var i = 0; i < stock.length; i++) {
            if (stock[i].hasOwnProperty('name')) {
                if (stock[i].name == itemName) {
                    if (stock[i].quantity < limit) {
                        console.log("Warning: ".concat(itemName, " stock is low"));
                    }
                }
                else {
                    console.log("Error: ".concat(itemName, " not found in stock"));
                }
            }
        }
    }
    else {
        console.log("Error: ".concat(itemName, " not found in stock"));
    }
}
setStockLimit("Teste", 10);
