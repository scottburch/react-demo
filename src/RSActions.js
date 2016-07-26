var TodoService = require('./TodoService');

module.exports = {
    todos: TodoService.getTodos
};