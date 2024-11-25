const stockProducts = require('./data.json');

const searchProductsByBrand = (brand) => {
  if (!brand) {
    return [];
  }

  const products = stockProducts.filter((product) => product.brand && product.brand
    .toLowerCase() === brand.toLowerCase());

  return products.map((product) => {
    const { description, price } = product;
    const priceInCents = price * 100;
    const formattedPrice = `R$ ${(priceInCents / 100).toFixed(2)}`;
    return { description, formattedPrice };
  });
};

console.log(searchProductsByBrand('união'));

module.exports = { searchProductsByBrand };
