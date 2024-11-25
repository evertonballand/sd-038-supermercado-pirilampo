const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  let outOfStock = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    const product = stockProducts[i];
    if (product.quantityInStock === 0) {
      outOfStock.push(product.productName);
    }
  }
  return outOfStock;
};
console.log(getOutOfStockProducts());
module.exports = { getOutOfStockProducts };
