const products = require('../products.json');

const getProducts = (req, res) => {
  if (req.query.price) {
    const filterPrice = products.filter((product) => {
     return product.price >= +req.query.price;
    })
    return res.status(200).json(filterPrice)
  } else {
    return res.status(200).json({products})
  }
}

module.exports = getProducts;