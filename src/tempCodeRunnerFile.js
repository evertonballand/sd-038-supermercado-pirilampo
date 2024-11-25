const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  console.log(stockProducts.length);
  return stockProducts.length;
};

module.exports = { getUniqueProductsAmount };