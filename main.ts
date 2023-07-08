import { item } from "./interface";

var stock: Array<itemStock> = [];

class itemStock implements item{
  name: string;
  quantity: number;

  constructor(name: string, quantity: number){
    this.name = name;
    this.quantity = quantity
  }
}


function addItem(itemName: string, quantity: number): void {
  let newItem = new itemStock (itemName, quantity);

  if(stock.length > 0){
    for(let i = 0; i < stock.length; i++){
      if (stock[i].hasOwnProperty('name')) {
        if(stock[i].name == itemName){
          stock[i].quantity += quantity;
        }else{
          stock.push(newItem)
        }
      }
    }
  }else{
    stock.push(newItem)
  }

}
addItem("Teste", 5)
console.log(stock)
addItem("Teste", 8)
console.log(stock)

function removeItem(itemName: string, quantity: number):  void {
  if(stock.length > 0){
    for(let i = 0; i < stock.length; i++){
      if (stock[i].hasOwnProperty('name')) {
        if(stock[i].quantity < quantity){
          console.log(`Error: Not enough ${itemName} in stock`);
        }else{
          stock[i].quantity -= quantity;
        }
      }
    }
  }else{
    console.log(`Error: ${itemName} not found in stock`);
  }
}

removeItem("Teste", 5)
console.log(stock)

function checkStock(itemName: string): void {
  if(stock.length > 0){
    for(let i = 0; i < stock.length; i++){
      if (stock[i].hasOwnProperty('name')) {
        if(stock[i].name == itemName){
          console.log(stock[i]);
        }
        else{
          console.log(`Error: ${itemName} not found in stock`);
        }
      }
    }
  }else{
    console.log(`Error: ${itemName} not found in stock`);
  }
}

checkStock("Teste")


function setStockLimit(itemName: string, limit: number): void {
  if(stock.length > 0){
    for(let i = 0; i < stock.length; i++){
      if (stock[i].hasOwnProperty('name')) {
        if(stock[i].name == itemName){
          if(stock[i].quantity < limit){
            console.log(`Warning: ${itemName} stock is low`);
          }
        }
        else{
          console.log(`Error: ${itemName} not found in stock`);
        }
      }
    }
  }else{
    console.log(`Error: ${itemName} not found in stock`);
  }
}

setStockLimit("Teste", 10)