const router = require('express').Router();
const todo = require('../models/todos');
const mongoose = require('mongoose');

router.put('/', async (req, res) => {
    try {
        const newItem = new todo({
            item: req.body.item,
            done: false,
        })
        console.log(newItem)

        const saveItem = await newItem.save()
        res.status(200).json(saveItem);
    } catch (err) {
        res.json(err);
    }
})

router.post('/', (req, res) => {
    todo.updateOne({
        _id: new mongoose.Types.ObjectId(req.body.id),
    }, {
        done: req.body.done,
    }).then(() => {
        res.sendStatus(200);
    });
});

router.get('/', async (req, res) => {
    try {
        const allTodoItems = await todo.find({});
        res.status(200).json(allTodoItems)
    } catch (err) {
        res.json(err);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updateItem = await todo.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json(updateItem);
    } catch (err) {
        res.json(err);
    }
})



router.delete('/:id', async (req, res) => {
    try {
        const deleteItem = await todo.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted');
    } catch (err) {
        res.json(err);
    }
})


//export router
module.exports = router;