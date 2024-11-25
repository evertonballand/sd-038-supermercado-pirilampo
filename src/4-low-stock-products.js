const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  let lowStock = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    if (stockProducts[i].quantityInStock > 0 && stockProducts[i].quantityInStock <= 10) {
      const productString = `${stockProducts[i].productName}: ${stockProducts[i]
        .quantityInStock} unidades`;
      lowStock.push(productString);
    }
  }
  return lowStock;
};
console.log(getLowStockProducts());
module.exports = { getLowStockProducts };
