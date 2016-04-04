var RS = require('./RS');
var TODO_LOAD_DELAY = 2000;

RS.set('todos', []);

module.exports =  {
    getTodos() {
        initialTodos();
        return RS.get('todos');
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

var initialTodos = _.once(() => setTimeout(() => _.size(RS.get('todos')) || RS.set('todos', initialTodosData), TODO_LOAD_DELAY));


var initialTodosData = [{id:1, description: 'Do something'}, {id:2, description: 'Do something else'}];