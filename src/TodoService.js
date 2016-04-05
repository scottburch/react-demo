var RS = require('./RS');
var TODO_LOAD_DELAY = 2000;

RS.set('todos', []);

module.exports =  {
    getTodos() {
        loadInitialTodos();
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

function loadInitialTodos() {
    var todos = [
        {id:1, description: 'Do something'},
        {id:2, description: 'Do something else'}
    ];


    setTimeout(R.pipe(
        R.partial(RS.get, ['todos']),
        R.unless(R.length, R.partial(RS.set, ['todos', todos]))
    ), TODO_LOAD_DELAY);

}

