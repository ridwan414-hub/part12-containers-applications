const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis')
const configs = require('../util/config')

let visits = 0

router.get('/statistics', async (_, res) => {
  const count = await getAsync('count')
  res.json({ added_todos: count || 0 })
})

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

module.exports = router;
