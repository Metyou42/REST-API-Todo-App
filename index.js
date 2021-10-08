require('dotenv').config();
const express = require('express');
const path = require('path');
const sequelize = require('./utils/datanase');
const routerTodo = require('./routes/todo');

const app = express();
app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/todo', routerTodo);

app.use((req, res, next) => {
  res.sendFile('/index.html');
});

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server is runing on port ${PORT}...`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
start();
