const express = require('express');
const router = express.Router();

const articles = [
  {
    id: 1,
    name: 'Macbook Pro 13" - 256GB',
    imageUrl: 'assets/images/article1.jpg',
    price: 1999.95,
    isOnSale: false,
    quantityInCart: 0
  },
  {
    id: 2,
    name: 'Macbook Pro 13" - 512GB',
    imageUrl: '',
    price: 2350.95,
    isOnSale: true,
    quantityInCart: 0
  },
  {
    id: 3,
    name: 'Macbook Pro 13" - 1TB',
    imageUrl: 'assets/images/article3.jpg',
    price: 2999.95,
    isOnSale: true,
    quantityInCart: 0
  },
  {
    id: 4,
    name: 'Macbook Pro 16" - 256GB',
    imageUrl: 'assets/images/article3.jpg',
    price: 2599.95,
    isOnSale: true,
    quantityInCart: 0
  },
  {
    id: 5,
    name: 'Macbook Pro 13" - 512GB',
    imageUrl: 'assets/images/article3.jpg',
    price: 3209.95,
    isOnSale: true,
    quantityInCart: 0
  },
  {
    id: 6,
    name: 'Macbook Pro 13" - 1T',
    imageUrl: 'assets/images/article3.jpg',
    price: 3999.95,
    isOnSale: false,
    quantityInCart: 0
  }
];

router.get('/', (req, res) => {
  var query = (req.query['q'] || '').toLowerCase();
  if (query) {
    const foundArticles = articles.filter(
      ({ name }) => name.toLowerCase().indexOf(query) !== -1
    );
    return res.status(200).json(foundArticles);
  }
  return res.status(200).json(articles);
});

router.get('/:code', (req, res) => {
  let articleCode = req.params.code;
  console.log ( articleCode )
  let foundArticle = articles.find(each => each.id == articleCode);
  console.log(foundArticle);
  if (foundArticle) {
    return res.status(200).json(foundArticle);
  }
  return res.status(400).json({msg: 'Article with code ' + articleCode + ' not found!'});
});

router.post('/', (req, res) => {
  let article= req.body;
  if (article.id) {
    return res
      .status(400)
      .json({ msg: 'Article Id seems to already have an id assigned' });
  }

  article.id = articles.length + 1;
  article.quantityInCart = 0;
  articles.push(article);
  return res.status(200).json(article);
});

router.patch('/:id', (req, res) => {
  const articleId = req.params.id;
  const foundArticle = articles.find(({ id }) => id == articleId);
  if (foundArticle) {
    const changeInQuantity = req.body.changeInQuantity;
    foundArticle.quantityInCart += changeInQuantity;
    return res.status(200).json({ msg: 'Successfully updated cart' });
  }
  return res
    .status(400)
    .json({ msg: 'Article with id ' + articleId + ' not found.' });
});

module.exports = router;
