const { Router } = require('express');
const Todo = require('../models/todo');

const router = Router();

// get page of tasks
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json(todos);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      massage: 'Server error',
    });
  }
});

// create new task
router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      done: false,
    });

    res.status(201).json({ todo });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      massage: 'Server error',
    });
  }
});

// complite task
router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    todo.done = req.body.done;
    todo.save();
    res.status(200).json({ todo });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      massage: 'Server error',
    });
  }
});

// delete task
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).json({});
  } catch (e) {
    console.log(e);
    res.status(500).json({
      massage: 'Server error',
    });
  }
});

module.exports = router;
