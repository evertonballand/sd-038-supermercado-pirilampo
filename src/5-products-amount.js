const stockProducts = require('./data.json');

const getProductsAmount = () => {
  const initialValue = 0;
  const stockTotal = stockProducts.reduce(
    (acc, product) => acc + product.quantityInStock, initialValue,
  );
  return stockTotal;
};

console.log(getProductsAmount());

module.exports = { getProductsAmount };
