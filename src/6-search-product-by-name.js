const stockProducts = require('./data.json');

const searchProductByName = (productName) => {
  if (!productName) {
    return null;
  }

  const products = stockProducts.find((product) => product.productName && product.productName
    .toLowerCase() === productName.toLowerCase());

  if (products) {
    const { description, price } = products;
    const priceInCents = price * 100;
    const formattedPrice = `R$ ${(priceInCents / 100).toFixed(2)}`;
    return { description, formattedPrice };
  }
  return null;
};

console.log(searchProductByName('Nutella'));

module.exports = { searchProductByName };
