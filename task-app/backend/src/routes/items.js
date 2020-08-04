const { Router }  = require('express');
const router = Router();
const { getItems, createItem, getItem, updateItem,deleteItem } = require('../controllers/items.controllers');

router.route('/')//Esto sirve para poner la rita api inicial de notes
    .get(getItems)
    .post(createItem)

router.route('/:id')
    .get(getItem)
    .put(updateItem)
    .delete(deleteItem)


module.exports = router;