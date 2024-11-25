const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  const products = stockProducts.filter((product) => product.nutritionalInfo
  && product.nutritionalInfo.vitamins);
  return products.map((product) => {
    const { description, price, nutritionalInfo } = product;
    const priceInCents = price * 100;
    const formattedPrice = `R$ ${(priceInCents / 100).toFixed(2)}`;
    return { description, formattedPrice, vitaminsInformation: [nutritionalInfo.vitamins] };
  });
};
console.log(getProductsRichInVitamin());

module.exports = { getProductsRichInVitamin };
