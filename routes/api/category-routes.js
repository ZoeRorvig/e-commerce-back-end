const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{
        model: Product,
      }]
    });
    res.json(categoryData);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

// find one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{
        model: Product,
      }]
    });
    res.json(categoryData);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.json(categoryData);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, { where: { id: req.params.id } });
    res.json(categoryData);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({ where: { id: req.params.id } });
    res.json(categoryData);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

module.exports = router;
