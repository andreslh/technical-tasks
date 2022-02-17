/*
Create a function that receives a list of products (quantity and unit price) and returns the total price of these products plus a 15% tax.
Now, imagine that you must add a second tax to this total, but this second tax can be different depending on who the client is, it can be 20% or 10%.


Example:
Base tax: 15
Products = [{ quantity: 5, price: 5 }, { quantity: 3, price: 10 }]

Client A: 20% tax
Final Price: (5*5 + 3*10) + 15% TAX + 20% TAX = 75.90

Client B: 10% tax
Final Price: (5*5 + 3*10) + 15% TAX + 10% TAX = 69.58

*/

// BASIC

const BASE_TAX = 15;

const getPrice = (products, tax) => {
  const totalNetPrice = products.reduce((acc, product) =>
    acc + (product.price * product.quantity), 0);

  const totalWithBasicTax = totalNetPrice + (totalNetPrice * BASE_TAX / 100);
  return parseFloat(totalWithBasicTax + (totalWithBasicTax * tax / 100)).toFixed(2);
}

const products = [{ quantity: 5, price: 5 }, { quantity: 3, price: 10 }];

const addTax20 = getPrice(products, 20);
const addTax10 = getPrice(products, 10);

console.log(addTax20);
console.log(addTax10);


// ------------------------

const BASE_TAX = 15;

const getBasicPrice = products => {
  const totalNetPrice = products.reduce((acc, product) =>
    acc + (product.price * product.quantity), 0);

  const totalWithBasicTax = totalNetPrice + (totalNetPrice * BASE_TAX / 100);

  return tax => parseFloat(totalWithBasicTax + (totalWithBasicTax * tax / 100)).toFixed(2);
}

const products = [{ quantity: 5, price: 5 }, { quantity: 3, price: 10 }];

const basicPrice = getBasicPrice(products);

const addTax20 = basicPrice(20);
const addTax10 = basicPrice(10);

console.log(addTax20);
console.log(addTax10);