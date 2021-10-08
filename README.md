# REST API Todo App

#### REST API Todo App

## Used technology

- Node.js/Express
- MySQL
- dotenv
- GRUD

## Opportunities

- Get all todos in JSON (GET)
- Create new task (POST)
- Complite task by id (PUT)
- Delete task by id (DELETE)

## Guide how to use

| ApiKey              | Descriptions                                                   |
| ------------------- | -------------------------------------------------------------- |
| GET /api/todo/      | Get all todos in JSON format                                   |
| POST /api/todo      | Create new todo, req.body - {title}, response new todo in JSON |
| PUT /api/todo/id    | Complete task, response new todo in JSON                       |
| DELETE /api/todo/id | Delete task, response empty JSON                               |

App use MySQL DBMS
