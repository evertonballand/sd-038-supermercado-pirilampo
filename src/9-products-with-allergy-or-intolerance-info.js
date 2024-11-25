const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  const products = stockProducts.filter((product) => product.allergyOrIntolerance);
  return products.map((product) => {
    const { description, price, allergyOrIntolerance } = product;
    const priceInCents = price * 100;
    const formattedPrice = `R$ ${(priceInCents / 100).toFixed(2)}`;
    const allergyItems = allergyOrIntolerance.join(' ');
    const allergyOrIntoleranceMessage = `Pode conter: ${allergyItems}`;
    return { description, formattedPrice, allergyOrIntoleranceMessage };
  });
};
console.log(getProductsWithAllergyOrIntoleranceInfo());

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
