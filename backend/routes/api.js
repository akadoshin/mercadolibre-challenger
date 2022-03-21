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
        const brand = filters.find((filter) => filter.id === 'BRAND').values;

        if (brand.length > 0) {
          response.categories = brand.map(({ name }) => name);
        }

        if (categories.length > 0) {
          response.categories.push(categories.map(({ name }) => name));
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

router.get('/items/:id', async function (req, res, next) {
  const idItem = req.params.id;
  const { author } = res.locals;

  if (idItem) {
    try {
      const itemResponse = await fetch(MeliApi + 'items/' + idItem);
      const itemResponseJson = await itemResponse.json();

      const response = {
        author,
      };

      if (itemResponseJson) {
        response.item = {
          id: itemResponseJson.id,
          title: itemResponseJson.title,
          price: {
            currency: itemResponseJson.currency_id,
            amount: itemResponseJson.price,
            decimals: itemResponseJson.decimals,
          },
          picture: itemResponseJson.pictures[0].url,
          condition: itemResponseJson.condition,
          free_shipping: itemResponseJson.shipping.free_shipping,
          sold_quantity: itemResponseJson.sold_quantity,
        };

        const descriptionResponse = await fetch(MeliApi + 'items/' + idItem + '/description');
        const descriptionResponseJson = await descriptionResponse.json();

        if (descriptionResponseJson) {
          response.item.description = descriptionResponseJson.plain_text;
        }

        const categoriesResponse = await fetch(MeliApi + 'categories/' + itemResponseJson.category_id);
        const categoriesResponseJson = await categoriesResponse.json();

        if (categoriesResponseJson) {
          response.categories = categoriesResponseJson.path_from_root.map(({ name }) => name);
        }
      }

      res.send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.status(404).send('Not items found');
  }
});

module.exports = router;
