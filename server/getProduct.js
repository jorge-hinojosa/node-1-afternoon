const products = require('../products.json');

const getProduct = (req, res) => {
  const product = products.find(product => +product.id === +req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json(
        'error: Not found. Please try a different ID'
      )
    }
}

module.exports = getProduct;