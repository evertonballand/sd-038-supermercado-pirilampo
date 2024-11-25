const stockProducts = require('./data.json');

console.log(stockProducts.length);
const getUniqueProductsAmount = () => stockProducts.length;

module.exports = { getUniqueProductsAmount };
