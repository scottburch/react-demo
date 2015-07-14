var RS = require('./RS');

var todosLoaded = false;

module.exports =  {
    getTodos() {
        todosLoaded || RS.set('todos', [{id:1, description: 'Do something'}, {id:2, description: 'Do something else'}]);
        todosLoaded = true;
        return RS.get('todos');
    },

    getIncompleteTodos() {
        return RS.get('todos').filter(todo => todo.complete !== true);
    }
};