const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const MeliApi = 'https://api.mercadolibre.com/';

router.use(function (req, res, next) {
  res.locals.author = {
    name: 'Jhon Anderson',
    lastname: 'Monroy Cardenas',
  };
  next();
});

router.get('/items', async function (req, res, next) {
  const query = req.query.q;
  const { author } = res.locals;

  if (query) {
    try {
      const searchResponse = await fetch(MeliApi + 'sites/MLA/search?q=' + query + '&limit=4');
      const searchResponseJson = await searchResponse.json();
      const { results, filters } = searchResponseJson;

      const response = {
        author,
      };

      if (filters.length > 0) {
        const categories = filters.find((filter) => filter.id === 'category').values;

        if (categories.length > 0) {
          response.categories = categories.map(({ name }) => name);
        }
      }

      if (results.length > 0) {
        response.items = results.map((item) => ({
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: item.decimals,
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
        }));
      }

      res.send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.status(404).send('Not items found');
  }
});

router.get('/items/:id', function (req, res, next) {
  const idItem = req.params.id;

  if (idItem) {
    res.send(idItem);
  } else {
    res.status(404).send('Not items found');
  }
});

module.exports = router;
