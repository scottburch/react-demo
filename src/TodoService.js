var RS = require('./RS');
var todosLoaded = false;
var TODO_LOAD_DELAY = 2000;

RS.set('todos', []);

module.exports =  {
    getTodos() {
        todosLoaded || setTimeout(() => (RS.get('todos') && RS.get('todos').length > 0) || RS.set('todos', [{id:1, description: 'Do something'}, {id:2, description: 'Do something else'}]), TODO_LOAD_DELAY);
        todosLoaded = true;
        return RS.get('todos');
    },

    getIncompleteTodos() {
        return RS.get('todos').filter(todo => todo.complete !== true);
    },

    addTodo(data) {
        var idx = RS.get('todos').length;
        RS.set(`todos.${idx}`, data);
        setTimeout(() => RS.set(`todos.${idx}.id`, _.uniqueId()), 2000);
    },
    deleteTodo(id) {
        RS.set('todos', RS.get('todos').filter(todo => todo.id !== id));
    }
};