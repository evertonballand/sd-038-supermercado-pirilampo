const stockProducts = require('./data.json');

const getUniqueProductsName = () => stockProducts.map((product) => product.productName);
console.log(getUniqueProductsName());

module.exports = { getUniqueProductsName };
