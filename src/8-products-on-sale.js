const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  const products = stockProducts.filter((product) => product.onSale);
  return products.map((product) => {
    const { description, price } = product;
    const priceInCents = price * 100;
    const formattedPrice = `R$ ${(priceInCents / 100).toFixed(2)}`;
    return { description, formattedPrice, onSale: true };
  });
};
console.log(getProductsOnSale());

module.exports = { getProductsOnSale };
